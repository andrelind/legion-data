// @flow
import type { Unit } from '../types';

const units: Array<Unit> = [
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
  },
];

export default units;