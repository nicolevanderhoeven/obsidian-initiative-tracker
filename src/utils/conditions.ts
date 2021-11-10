import type { Condition } from "../../@types";

export const Conditions: Condition[] = [
    {
        name: "Bane",
        description: [
            "Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.",
            "At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
        ]
    },
    {
        name: "Bless",
        description: [
            "Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw."
        ]
    },
    {
        name: "Blinded",
        description: [
            "A blinded creature can’t see and automatically fails any ability check that requires sight.",
            "Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage."
        ]
    },
    {
        name: "Charmed",
        description: [
            "A charmed creature can’t Attack the charmer or target the charmer with harmful Abilities or magical Effects.",
            "The charmer has advantage on any ability check to interact socially with the creature."
        ]
    },
    {
        name: "Concentrating",
        description: [
            "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends.",
            "A creature loses concentration when: it casts another spell that requires concentration, is incapacitated, or dies.",
            "When a creature takes damage, it must make a constitution saving throw with a DC of 10 or half the damage it took, whichever is higher. On a failure, concentration is lost."
        ]
    },
    {
        name: "Deafened",
        description: [
            "A deafened creature can’t hear and automatically fails any ability check that requires hearing."
        ]
    },
    {
        name: "Enhance Ability",
        description: [
            "You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects; the target gains that effect until the spell ends.",
            "Bear's Endurance. The target has advantage on Constitution checks. It also gains 2d6 temporary hit points, which are lost when the spell ends.",
            "Bull's Strength. The target has advantage on Strength checks, and his or her carrying capacity doubles.",
            "Cat's Grace. The target has advantage on Dexterity checks. It also doesn't take damage from falling 20 feet or less if it isn't incapacitated.",
            "Eagle's Splendor. The target has advantage on Charisma checks.",
            "Fox's Cunning. The target has advantage on Intelligence checks.",
            "Owl's Wisdom. The target has advantage on Wisdom checks.",
            "At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
        ]
    },
    {
        name: "Eyes of Night",
        description: [
            "You can see through the deepest gloom. You have darkvision out to a range of 300 feet. In that radius, you can see in dim light as if it were bright light and in darkness as if it were dim light.",
            "As an action, you can magically share the darkvision of this feature with willing creatures you can see within 10 feet of you, up to a number of creatures equal to your Wisdom modifier (minimum of one creature). The shared darkvision lasts for 1 hour. Once you share it, you can’t do so again until you finish a long rest, unless you expend a spell slot of any level to share it again."
        ]
    },
    {
        name: "Faerie Fire",
        description: [
            "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius.",
            "Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can’t benefit from being invisible."
        ]
    },
    {
        name: "Frightened",
        description: [
            "A frightened creature has disadvantage on Ability Checks and Attack rolls while the source of its fear is within Line of Sight.",
            "The creature can’t willingly move closer to the source of its fear."
        ]
    },
    {
        name: "Grappled",
        description: [
            "A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.",
            "The condition ends if the Grappler is incapacitated.",
            "The condition also ends if an Effect removes the grappled creature from the reach of the Grappler or Grappling Effect, such as when a creature is hurled away by the Thunderwave spell."
        ]
    },
    {
        name: "Hexed",
        description: [
            "Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability.",
            "If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature.",            
            "A remove curse cast on the target ends this spell early."
        ]
    },
    {
        name: "Incapacitated",
        description: ["An incapacitated creature can’t take Actions or Reactions."]
    },
    {
        name: "Inspired",
        description: [
            "Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes.",
            "The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails.",
            "Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time."
        ]
    },
    {
        name: "Invisible",
        description: [
            "An invisible creature is impossible to see without the aid of magic or a Special sense. For the Purpose of Hiding, the creature is heavily obscured. The creature’s Location can be detected by any noise it makes or any tracks it leaves.",
            "Attack rolls against the creature have disadvantage, and the creature’s Attack rolls have advantage."
        ]
    },
    {
        name: "Paralyzed",
        description: [
            "A paralyzed creature is incapacitated and can’t move or speak.",
            "The creature automatically fails Strength and Dexterity Saving Throws.",
            "Attack rolls against the creature have advantage.",
            "Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature."
        ]
    },
    {
        name: "Petrified",
        description: [
            "A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.",
            "The creature is incapacitated, can’t move or speak, and is unaware of its surroundings.",
            "Attack rolls against the creature have advantage.",
            "The creature automatically fails Strength and Dexterity Saving Throws.",
            "The creature has Resistance to all damage.",
            "The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized."
        ]
    },
    {
        name: "Poisoned",
        description: [
            "A poisoned creature has disadvantage on Attack rolls and Ability Checks."
        ]
    },
    {
        name: "Prone",
        description: [
            "A prone creature’s only Movement option is to crawl, unless it stands up and thereby ends the condition.",
            "The creature has disadvantage on Attack rolls.",
            "An Attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the Attack roll has disadvantage."
        ]
    },
    {
        name: "Reacted",
        description: [
            "A creature, unless otherwise specified, gets one reaction per round of combat.",
            "A reaction is an instant response to a trigger of some kind, which can occur on your turn or on someone else’s.",
            "A reaction can be spent to make an opportunity attack, do a readied action, or use an ability that requires a reaction.",
            "A creature that has already reacted cannot use a reaction until the start of its turn."
        ]
    },
    {
        name: "Readied action",
        description: [
            "You can take the Ready action on your turn, which lets you act using your reaction before the start of your next turn.",
            "First, you decide what perceivable circumstance will trigger your reaction. Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",            
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger. Remember that you can take only one reaction per round. When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration. If your concentration is broken, the spell dissipates without taking effect."
        ]
    },
    {
        name: "Restrained",
        description: [
            "A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.",
            "Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage.",
            "The creature has disadvantage on Dexterity Saving Throws."
        ]
    },
    {
        name: "Sanctuary",
        description: [
            "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball.",
            "If the warded creature makes an attack, casts a spell that affects an enemy, or deals damage to another creature, this spell ends."
        ]
    },
    {
        name: "Shield of Faith",
        description: [
            "The creature of your choice gets a +2 bonus to AC for the duration (10 minutes or until concentation is broken."
        ]
    },
    {
        name: "Sleep",
        description: [
            "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).",
            "Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature’s hit points from the total before moving on to the creature with the next lowest hit points. A creature’s hit points must be equal to or less than the remaining total for that creature to be affected.",
            "Undead and creatures immune to being charmed aren’t affected by this spell.",
            "At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st."
        ]
    },
    {
        name: "Stunned",
        description: [
            "A stunned creature is incapacitated, can’t move, and can speak only falteringly.",
            "The creature automatically fails Strength and Dexterity Saving Throws.",
            "Attack rolls against the creature have advantage."
        ]
    },
    {
        name: "Unconscious",
        description: [
            "An unconscious creature is incapacitated, can’t move or speak, and is unaware of its surroundings.",
            "The creature drops whatever it’s holding and falls prone.",
            "The creature automatically fails Strength and Dexterity Saving Throws.",
            "Attack rolls against the creature have advantage.",
            "Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature."
        ]
    },
    {
        name: "Vigilant Blessing",
        description: [
            "The night has taught you to be vigilant. As an action, you give one creature you touch (including possibly yourself) advantage on the next initiative roll the creature makes. This benefit ends immediately after the roll or if you use this feature again."
        ]
    },
];
