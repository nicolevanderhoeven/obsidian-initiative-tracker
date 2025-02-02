<script lang="ts">
    import { ExtraButtonComponent } from "obsidian";

    import store from "./store";
    import {
        BACKWARD,
        DICE,
        FORWARD,
        MAP,
        NEW,
        PLAY,
        REDO,
        STOP
    } from "src/utils";

    import type TrackerView from "src/view";

    export let state: boolean = false;
    export let map: boolean = false;

    let view: TrackerView;
    store.view.subscribe((value) => {
        view = value;
    });

    const playButton = (node: HTMLElement) => {
        new ExtraButtonComponent(node)
            .setIcon(PLAY)
            .setTooltip("Play")
            .onClick(() => {
                view.toggleState();
                state = view.state;
            });
    };
    const stopButton = (node: HTMLElement) => {
        new ExtraButtonComponent(node)
            .setIcon(STOP)
            .setTooltip("Stop") /* 
            .setDisabled(numberOfCreatures == 0) */
            .onClick(() => {
                view.toggleState();
                state = view.state;
            });
    };
    const nextButton = (node: HTMLElement) => {
        new ExtraButtonComponent(node)
            .setIcon(FORWARD)
            .setTooltip("Next")
            .onClick(() => {
                view.goToNext();
            });
    };
    const prevButton = (node: HTMLElement) => {
        new ExtraButtonComponent(node)
            .setIcon(BACKWARD)
            .setTooltip("Previous")
            .onClick(() => {
                view.goToPrevious();
            });
    };

    const restoreButton = (node: HTMLElement) => {
        new ExtraButtonComponent(node)
            .setIcon(REDO)
            .setTooltip("Reset HP & Status")
            .onClick(() => {
                view.resetEncounter();
            });
    };
    const newButton = (node: HTMLElement) => {
        new ExtraButtonComponent(node)
            .setIcon(NEW)
            .setTooltip("New Encounter")
            .onClick(() => {
                view.newEncounter();
            });
    };

    const diceButton = (node: HTMLElement) => {
        new ExtraButtonComponent(node)
            .setIcon(DICE)
            .setTooltip("Re-roll Initiatives")
            .onClick(() => {
                view.rollInitiatives();
            });
    };

    const mapButton = (node: HTMLElement) => {
        new ExtraButtonComponent(node)
            .setIcon(MAP)
            .setTooltip("Open Leaflet Map")
            .onClick(() => {
                view.openInitiativeView();
            });
    };
</script>

<div class="buttons">
    <div class="state">
        {#if state}
            <div use:stopButton />
            <div use:prevButton />
            <div use:nextButton />
        {:else}
            <div use:playButton />
        {/if}
    </div>
    <div class="clean">
        <div use:diceButton />
        <div use:restoreButton />
        <div use:newButton />
        {#if map}
            <div use:mapButton />
        {/if}
    </div>
</div>

<style>
    .buttons {
        display: flex;
        justify-content: space-between;
        padding: 0 0 0.5rem 0;
    }
    .state {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .clean {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .state > *:not(:last-child),
    .clean > *:not(:last-child) {
        margin-right: 0.25rem;
    }
</style>
