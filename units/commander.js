// @flow
import type { Unit } from '../types';

const units: Unit[] = [
  {
    ldf: 'lukeskywalker',
    unique: true,
    name: 'Luke Skywalker',
    subtitle: 'Hero of the Rebellion',
    side: 'light',
    type: 'Trooper',
    points: 160,
    rank: 'Commander',
    minis: 1,
    wounds: 6,
    courage: 3,
    defense: 'red',
    surge: { attack: 'crit' },
    speed: 2,
    slots: ['Force', 'Force', 'Gear'],
    keywords: [
      {
        name: '[action] Jump 1',
        description:
          'Perform a move during which you ignore terrain that is height 1 or lower. This is treated as a move action.',
      },
      {
        name: 'Charge',
        description:
          'After you perform a move action, you may perform a free melee attack.',
      },
      {
        name: 'Deflect',
        description:
          'While defending, if you spend a dodge token, you gain "[defense_surge]:[block]"; if it\'s a ranged attack, the attacker suffers 1 wound for each [defense_surge] rolled',
      },
      {
        name: 'Immune: Pierce',
        description: 'Pierce cannot be used against you',
      },
    ],
    weapons: [
      {
        name: "Anakin's Lightsaber",
        range: { from: 0 },
        dice: { black: 6 },
        keywords: ['Impact 2', 'Pierce 2'],
      },
      {
        name: "Luke's DL-44 Blaster Pistol",
        range: { from: 1, to: 2 },
        dice: { red: 2 },
        keywords: ['Pierce 2'],
      },
    ],
    commandCards: [
      {
        ldf: 'sonofskywalker',
        name: 'Son of Skywalker',
        pips: 1,
        orders: 'Luke Skywalker',
        description:
          'When Luke performs his first attack he may make an additional attack.',
      },
      {
        ldf: 'myallyistheforce',
        name: 'My Ally is the Force',
        pips: 2,
        orders: '2 Troopers',
        description:
          'When a friendly trooper unit is activated it gains a dodge token.',
      },
      {
        ldf: 'returnofthejedi',
        name: 'Return of the Jedi',
        pips: 3,
        orders: '2 Units and Luke Skywalker',
        description:
          'When Luke Skywalker is issued an order, he gains 1 dodge token. When Luke Skywalker activates, each friendly trooper at range 1-3 of him may remove 1 suppression token.',
      },
    ],
  },

  {
    ldf: 'darthvader',
    unique: true,
    name: 'Darth Vader',
    subtitle: 'Dark Lord of the Sith',
    side: 'dark',
    type: 'Trooper',
    points: 200,
    rank: 'Commander',
    minis: 1,
    wounds: 8,
    courage: 0,
    defense: 'red',
    surge: {},
    speed: 1,
    slots: ['Force', 'Force', 'Force'],
    keywords: [
      {
        name: 'Deflect',
        description:
          'While defending, if you spend a dodge token, you gain "[defense_surge]:[block]"; if it\'s a ranged attack, he attacker suffers 1 wound for each [defense_surge] rolled',
      },
      {
        name: 'Immune: Pierce',
        description: 'Pierce cannot be used against you',
      },
      {
        name: 'Master of the Force 1',
        description:
          'During the End Phase, you may ready one of your [force] upgrade cards.',
      },
      {
        name: 'Relentless',
        description:
          'After you perform a move action, you may perform a free attack action.',
      },
    ],
    weapons: [
      {
        name: "Vader's Lightsaber",
        range: { from: 0 },
        dice: { red: 6 },
        keywords: ['Impact 3', 'Pierce 3'],
      },
    ],
    commandCards: [
      {
        ldf: 'implacable',
        name: 'Implacable',
        pips: 1,
        orders: 'Darth Vader',
        description:
          "At the end of Darth Vader's first activation, he may suffer 1 wound to shuffle his order token into the order pool. During Darth Vader's second activation, he performs 1 fewer action.",
      },
      {
        ldf: 'newwaystomotivatethem',
        name: 'New Ways to Motivate Them',
        pips: 2,
        orders: '2 Troopers',
        description:
          'When a friendly non-Darth Vader trooper unit with a faceup order token activates, it may suffer 1 wound to perform 1 free action.',
      },
      {
        ldf: 'masterofevil',
        name: 'Master of Evil',
        pips: 3,
        orders: '2 Units and Darth Vader',
        description:
          'When Darth Vader is issued an order, he gains 1 dodge token. When Darth Vader activates, each enemy trooper at range 1-2 of him gains 3 suppression tokens.',
      },
    ],
  },
  {
    ldf: 'generalveers',
    unique: true,
    name: 'General Veers',
    subtitle: 'Master Tactician',
    side: 'dark',
    type: 'Trooper',
    points: 80,
    rank: 'Commander',
    minis: 1,
    wounds: 5,
    courage: 2,
    defense: 'red',
    surge: { attack: 'crit' },
    speed: 2,
    slots: ['Command', 'Command', 'Gear'],
    keywords: [
      {
        name: '[action] Spotter 2',
        description:
          'Choose up to 2 friendly units at range 1. Each chosen unit gains an aim token.',
      },
      {
        name: 'Inspire 1',
        description:
          'After your Rally step, remove up to 1 suppression token from another friendly unit at range 1-2.',
      },
      {
        name: 'Precise 1',
        description: '',
      },
      {
        name: 'Sharpshooter 1',
        description:
          'While performing a ranged attack, reduce the defenders cover by 1.',
      },
    ],
    weapons: [
      {
        name: 'Combat Expertise',
        range: { from: 0 },
        dice: { black: 2 },
      },
      {
        name: 'Veers´ E-11 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { white: 3 },
        keywords: ['Pierce 1'],
      },
    ],
    commandCards: [
      {
        ldf: 'maximumfirepower',
        name: 'Maximum Firepower',
        pips: 1,
        orders: 'General Veers',
        description:
          'At the end of General Veers´ activation, he may perform an attack using the following weapon:',
        weapon: {
          range: { from: 4 },
          dice: { red: 4 },
          keywords: ['Impact 2', 'Immune: Deflect'],
        },
      },
      {
        ldf: 'evasivemaneuvers',
        name: 'Evasive Maneuvers',
        pips: 2,
        orders: '2 Vehicles',
        description:
          'When a friendly vehicle unit is issued an order it gains 1 dodge token. Friendly vehicle units can spend dodge tokens to cancel critical hit results.',
      },
      {
        ldf: 'imperialdiscipline',
        name: 'Imperial Discipline',
        pips: 3,
        orders: 'General Veers and 2 units',
        description: 'When a friendly unit is issued an order it may recover.',
      },
    ],
  },
  {
    ldf: 'leiaorgana',
    name: 'Leia Organa',
    subtitle: 'Fearless and',
    unique: true,
    side: 'light',
    type: 'Trooper',
    points: 90,
    rank: 'Commander',
    minis: 1,
    wounds: 6,
    courage: 2,
    defense: 'white',
    surge: { attack: 'crit', defense: 'block' },
    speed: 2,
    slots: ['Command', 'Command', 'Gear'],
    keywords: [
      {
        name: '[action] Take Cover 2',
        description:
          'Choose up to 2 friendly trooper units at range 1. Each chosen unit gains a dodge token.',
      },
      {
        name: 'Inspire 2',
        description:
          'After your Rally step, remove up to 2 suppression tokens from another friendly unit at range 1-2.',
      },
      {
        name: 'Nimble',
        description:
          'After defending, if you spent 1 or more dodge tokens, gain 1 dodge token.',
      },
      {
        name: 'Sharpshooter 2',
        description:
          'While performing a ranged attack, reduce the defenders cover by 2.',
      },
    ],
    weapons: [
      {
        name: 'Martial Arts',
        range: { from: 0 },
        dice: { black: 3 },
      },
      {
        name: "Leia's Defender Sporting Blaster",
        range: { from: 1, to: 2 },
        dice: { black: 3 },
        keywords: ['Pierce 1'],
      },
    ],
    commandCards: [
      {
        ldf: 'coordinatedbombardment',
        name: 'Coordinated Bombardment',
        pips: 1,
        orders: 'Leia Organa',
        description:
          "At the end of Leia Organa's activation, you may perform up to 3 attacks against different enemy units using the following weapon:",
        weapon: {
          range: { from: 4 },
          dice: { red: 2 },
          keywords: ['Immune: Deflect'],
        },
      },
      {
        ldf: 'notimeforsorrows',
        name: 'No Time for Sorrows',
        pips: 2,
        orders: '2 Troopers',
        description:
          'When a friendly Trooper unit is issued an order, it may perform a speed-1 move.',
      },
      {
        ldf: 'somebodyhastosaveourskins',
        name: 'Somebody Has to Save Our Skins',
        pips: 3,
        orders: 'Leia Organa and 2 Units',
        description:
          "After Leia Organa's activation, you may choose a friendly unit at range 1-2 with a faceup order token and activate it.",
      },
    ],
  },
  {
    ldf: 'hansolo',
    name: 'Han Solo',
    // subtitle: '',
    unique: true,
    side: 'light',
    type: 'Trooper',
    points: 120,
    rank: 'Commander',
    minis: 1,
    wounds: 6,
    courage: 2,
    defense: 'white',
    surge: { attack: 'crit', defense: 'block' },
    speed: 2,
    slots: ['Command', 'Elite', 'Gear'],
    keywords: [
      {
        name: 'Low Profile',
        description:
          'While you are defending, if you have light cover, improve your cover by 1.',
      },
      {
        name: 'Gunslinger',
        description:
          'After you perform a ranged attack action, you may perform an additional ranged attack action against a different unit.',
      },
      {
        name: 'Sharpshooter 1',
        description:
          'While performing a ranged attack, reduce the defenders cover by 1.',
      },
      {
        name: 'Uncanny Luck 2',
        description: 'While defending, you may reroll up to 2 defense dice.',
      },
    ],
    weapons: [
      {
        name: 'Brawl',
        range: { from: 0 },
        dice: { white: 3 },
      },
      {
        name: "Han's DL-44 Blaster Pistol",
        range: { from: 1, to: 2 },
        dice: { red: 2 },
        keywords: ['Pierce 2'],
      },
    ],
    commandCards: [
      {
        ldf: 'sorryaboutthemess',
        name: 'Sorry About the Mess',
        pips: 0,
        orders: 'Han Solo',
        description:
          'While building a command hand, treat this card as though it has 1 pip. When Han Solo is issued an order, he gains 1 aim token and 1 dodge token.',
      },
      {
        ldf: 'sorryaboutthemess',
        name: 'Sorry About the Mess',
        pips: 2,
        orders: 'Han Solo and 1 Trooper',
        description:
          'When an enemy unit performs an attack, it must attack a trooper unit that has a faceup order token, if available.',
      },
    ],
  },
];

export default units;
