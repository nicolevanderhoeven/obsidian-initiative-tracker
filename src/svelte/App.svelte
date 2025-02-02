<svelte:options accessors={true} />

<script lang="ts">
    import Controls from "./Controls.svelte";
    import Table from "./Table.svelte";
    import Create from "./Create.svelte";

    import store from "./store";
    import type TrackerView from "src/view";

    import { Creature } from "src/utils/creature";
    import { ExtraButtonComponent } from "obsidian";
    import { ADD, COPY } from "src/utils";
    import { ConditionSuggestionModal } from "src/utils/suggester";
    import type { Condition } from "@types";
    import { createEventDispatcher } from "svelte";
    import {
        encounterDifficulty,
        formatDifficultyReport
    } from "src/utils/encounter-difficulty";
    import type { DifficultyReport } from "src/utils/encounter-difficulty";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";

    const dispatch = createEventDispatcher();

    export let creatures: Creature[] = [];
    export let name: string = null;
    export let state: boolean;
    export let current: number;
    export let map: boolean;
    export let xp: number;
    export let displayDifficulty: boolean;

    let canDisplayDifficulty = false;

    let totalXP = xp;
    $: {
        if (!xp) {
            totalXP = creatures
                ?.filter((creature) => creature.xp)
                ?.reduce((num, cr) => num + cr.xp, 0);
        }
    }

    // update encounter difficulty
    const difficultyBar = tweened(0, {
        duration: 400,
        easing: cubicOut
    });

    let dr: DifficultyReport;
    $: {
        let playerLevels: number[] = [];
        let monstersXp: number[] = [];
        creatures
            ?.filter((creature) => creature.enabled)
            ?.forEach((creature) => {
                if (creature.level) {
                    playerLevels.push(creature.level);
                } else {
                    monstersXp.push(creature.xp);
                }
            });
        let dif = encounterDifficulty(
            playerLevels.filter((p) => p),
            monstersXp.filter((m) => m)
        );

        if (!dif) {
            canDisplayDifficulty = false;
        } else {
            canDisplayDifficulty = true;

            let progress =
                dif.adjustedXp / dif.budget.deadly > 1
                    ? 1
                    : dif.adjustedXp / dif.budget.deadly;
            difficultyBar.set(progress);
            dr = dif;
        }
    }
    let view: TrackerView;
    store.view.subscribe((v) => (view = v));

    export let show: boolean;

    export let updatingHP: Creature = null;
    const updateHP = (toAdd: number) => {
        view.updateCreature(updatingHP, { hp: -1 * toAdd });
        updatingHP = null;
    };

    export let updatingStatus: Creature = null;
    const addStatus = (tag: Condition) => {
        view.addStatus(updatingStatus, tag);
        updatingStatus = null;
    };

    let addNew = false;
    export let addNewAsync = false;
    const addButton = (node: HTMLElement) => {
        new ExtraButtonComponent(node)
            .setTooltip("Add Creature")
            .setIcon(ADD)
            .onClick(() => {
                addNew = true;
            });
    };
    const copyButton = (node: HTMLElement) => {
        new ExtraButtonComponent(node)
            .setTooltip("Copy Initiative Order")
            .setIcon(COPY)
            .onClick(async () => {
                await view.copyInitiativeOrder();
            });
    };
    let modal: ConditionSuggestionModal;
    const suggestConditions = (node: HTMLInputElement) => {
        modal = new ConditionSuggestionModal(view.plugin, node);
        modal.onClose = () => {
            node.blur();
        };
        modal.open();
    };
    function init(el: HTMLInputElement) {
        el.focus();
    }
</script>

<div class="obsidian-initiative-tracker">
    <Controls {state} {map} />
    {#if name && name.length}
        <div class="initiative-tracker-name-container">
            <h2 class="initiative-tracker-name">{name}</h2>
            {#if totalXP > 0}
                <span class="initiative-tracker-xp encounter-xp"
                    >{totalXP} XP</span
                >
            {/if}
        </div>
    {/if}
    <Table
        {creatures}
        {show}
        {state}
        {current}
        on:update-hp={(evt) => {
            updatingHP = evt.detail;
        }}
        on:update-tags={(evt) => {
            updatingStatus = evt.detail;
        }}
    />
    {#if displayDifficulty && canDisplayDifficulty}
        <div
            class="difficulty-bar-container"
            aria-label={formatDifficultyReport(dr)}
        >
            <span>Easy</span>
            <span
                ><meter
                    class="difficulty-bar"
                    min="0"
                    low="0.33"
                    high="0.66"
                    optimum="0"
                    value={$difficultyBar}
                /></span
            >
            <span>Deadly</span>
        </div>
    {/if}
    {#if updatingHP}
        <div class="updating-hp">
            <span>Apply damage(+) or healing(-):</span>
            <!-- svelte-ignore a11y-autofocus -->
            <input
                type="number"
                on:blur={function (evt) {
                    updateHP(Number(this.value));
                }}
                on:keydown={function (evt) {
                    if (evt.key === "Enter" || evt.key === "Tab") {
                        evt.preventDefault();
                        this.blur();
                        return;
                    }
                    if (evt.key === "Escape") {
                        this.value = "";
                        this.blur();
                        return;
                    }
                    if (
                        !/^(-?\d*\.?\d*|Backspace|Delete|Arrow\w+)$/.test(
                            evt.key
                        )
                    ) {
                        evt.preventDefault();
                        return false;
                    }
                }}
                use:init
            />
        </div>
    {:else if updatingStatus}
        <div class="updating-hp">
            <span>Apply status:</span>
            <!-- svelte-ignore a11y-autofocus -->
            <input
                type="text"
                on:focus={function (evt) {
                    suggestConditions(this);
                }}
                on:blur={function (evt) {
                    if (!this.value.length) {
                        updatingStatus = null;
                        return;
                    }

                    addStatus(modal.condition);
                }}
                on:keydown={function (evt) {
                    if (evt.key === "Escape") {
                        this.value = "";
                        this.blur();
                        return;
                    }
                    if (evt.key === "Enter" || evt.key === "Tab") {
                        evt.preventDefault();
                        this.blur();
                        return;
                    }
                    if (evt.key === "Escape") {
                        this.value = "";
                        this.blur();
                        return;
                    }
                }}
                use:init
            />
        </div>
    {:else}
        <div class="add-creature-container">
            {#if addNew || addNewAsync}
                <Create
                    on:cancel={() => {
                        addNew = false;
                        addNewAsync = false;
                        dispatch("cancel-add-new-async");
                    }}
                    on:save={(evt) => {
                        const creature = evt.detail;
                        const newCreature = new Creature(
                            {
                                name: creature.name,
                                hp: creature.hp,
                                ac: creature.ac,
                                modifier: creature.modifier,
                                marker: view.plugin.data.monsterMarker,
                                xp: creature.xp,
                                player: creature.player,
                                level: creature.level
                            },
                            creature.initiative
                        );
                        if (addNewAsync) {
                            dispatch("add-new-async", newCreature);
                        } else {
                            view.addCreatures(newCreature);
                        }
                        addNew = false;
                        addNewAsync = false;
                    }}
                />
            {:else}
                <div class="context-container">
                    <div use:copyButton class="copy-button" />
                    <div use:addButton class="add-button" />
                </div>
            {/if}
        </div>
    {/if}
</div>

<style>
    .obsidian-initiative-tracker {
        margin: 0.5rem;
        min-width: 180px;
    }

    .add-creature-container {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        margin-right: 0.5rem;
    }
    .context-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }
    .copy-button {
        width: min-content;
        opacity: 0.25;
    }
    .copy-button:hover {
        opacity: 1;
    }
    .add-button {
        width: min-content;
    }
    .initiative-tracker-name-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.5rem;
    }
    .initiative-tracker-name {
        margin: 0;
    }
    .difficulty-bar-container {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 0.5rem;
        align-items: center;
        padding: 0 0.5rem;
        margin-bottom: 0.5rem;
        width: 100%;
    }
    .difficulty-bar {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 3px;
    }
</style>
