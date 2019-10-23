// @flow
import type { Unit } from '../types';

const units: Array<Unit> = [
  {
    ldf: 'rebeltroopers',
    name: 'Rebel Troopers',
    side: 'light',
    points: 40,
    rank: 'Corps',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 1,
    defense: 'white',
    surge: { defense: 'block' },
    speed: 2,
    slots: ['Heavy Weapon', 'Personnel', 'Gear', 'Grenades'],
    keywords: [
      {
        name: 'Nimble',
        description:
          'After defending, if you spent 1 or more dodge tokens, gain 1 dodge token.',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'A-280 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { black: 1 },
      },
    ],
  },
  {
    ldf: 'stormtroopers',
    name: 'Stormtroopers',
    side: 'dark',
    points: 44,
    rank: 'Corps',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 1,
    defense: 'red',
    surge: { attack: 'hit' },
    speed: 2,
    slots: ['Heavy Weapon', 'Personnel', 'Gear', 'Grenades'],
    keywords: [
      {
        name: 'Precise 1',
        description:
          'When you spend an aim token, reroll up to 1 additional die.',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'E-11 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { white: 1 },
      },
    ],
  },
  {
    ldf: 'snowtroopers',
    name: 'Snowtroopers',
    side: 'dark',
    points: 48,
    rank: 'Corps',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 1,
    defense: 'red',
    surge: { attack: 'hit' },
    speed: 1,
    slots: ['Heavy Weapon', 'Personnel', 'Gear', 'Grenades'],
    keywords: [
      {
        name: 'Steady',
        description:
          'After you perform a move action, you may perform a free ranged attack action.',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'E-11 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { white: 1 },
      },
    ],
  },
  {
    ldf: 'fleettroopers',
    name: 'Fleet Troopers',
    side: 'light',
    points: 44,
    rank: 'Corps',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 1,
    defense: 'white',
    surge: { attack: 'hit', defense: 'block' },
    speed: 2,
    slots: ['Heavy Weapon', 'Personnel', 'Gear', 'Grenades'],
    keywords: [
      {
        name: 'Ready 1',
        description: 'After you perform a standby action, gain 1 aim tokens.',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'DH-17 Blaster Pistol',
        range: { from: 1, to: 2 },
        dice: { white: 2 },
      },
    ],
  },
  {
    ldf: 'rebelveterans',
    name: 'Rebel Veterans',
    side: 'light',
    points: 48,
    rank: 'Corps',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 1,
    defense: 'white',
    surge: {
      attack: 'hit',
      defense: 'block',
    },
    speed: 2,
    slots: ['Gear', 'Grenades', 'Heavy Weapon', 'Personnel', 'Elite'],
    keywords: [
      {
        name: 'Coordinate',
        description:
          'Emplacement Trooper (After you are issued an order, you may issue an order to a friendly emplacement trooper unit at range 1.)',
      },
      {
        name: 'Defend 1',
        description: 'After you are issued an order, gain 1 dodge token.',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: {
          from: 0,
        },
        dice: {
          black: 1,
        },
      },
      {
        name: 'A-280 Blaster Rifle',
        range: {
          from: 1,
          to: 3,
        },
        dice: {
          black: 1,
        },
      },
    ],
  },
  {
    ldf: 'markiimediumblastertrooper',
    name: 'Mark II Medium Blaster Trooper',
    side: 'light',
    points: 38,
    rank: 'Corps',
    type: 'Trooper',
    minis: 1,
    wounds: 3,
    courage: 2,
    defense: 'white',
    surge: {
      attack: 'hit',
      defense: 'block',
    },
    speed: 1,
    slots: ['Comms'],
    keywords: [
      {
        name: 'Detachment: Rebel Veterans',
        description: '',
      },
      {
        name: 'Fire Support',
        description:
          'When another friendly unit performs a ranged attack, if you have a faceup order token, each mini in your unit may add an eliglble wapon to the attack pool. If you do, flip your order token facedown. Limit 1 Fire Support per attack pool.',
      },
      {
        name: 'Full Pivot',
        description: 'When you pivot you can pivot up to 360°.',
      },
      {
        name: 'Reposition',
        description:
          'Either before or after you perform a standard move, you may perform a free pivot action.',
      },
      {
        name: 'Sentinel',
        description: 'Your standby range is 1-3.',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: {
          from: 0,
        },
        dice: {
          black: 1,
        },
      },
      {
        name: 'A-280 Blaster Rifle',
        range: {
          from: 1,
          to: 3,
        },
        dice: {
          black: 1,
        },
      },
      {
        name: 'Mark II Medium Blaster',
        range: {
          from: 1,
          to: 3,
        },
        dice: {
          black: 4,
        },
        keywords: ['Critical 2', 'Cumbersome', 'Fixed: Front '],
      },
    ],
  },
  {
    ldf: 'shoretroopers',
    name: 'Shoretroopers',
    side: 'dark',
    points: 52,
    rank: 'Corps',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 1,
    defense: 'red',
    speed: 2,
    slots: ['Gear', 'Grenades', 'Heavy Weapon', 'Personnel', 'Elite'],
    keywords: [
      {
        name: 'Coordinate: Emplacement Trooper',
        description:
          'After you are issued an order, you may issue an order to a friendly emplacement trooper unit at range 1.',
      },
      {
        name: 'Target 1',
        description: 'After you are issued an order, gain 1 aim token',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'E-22 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { black: 1 },
      },
    ],
  },
  {
    ldf: 'df90mortartrooper',
    name: 'DF-90 Mortar Trooper',
    side: 'dark',
    points: 36,
    rank: 'Corps',
    type: 'Trooper',
    minis: 1,
    wounds: 3,
    courage: 2,
    defense: 'red',
    speed: 2,
    slots: ['Comms'],
    keywords: [
      { name: 'Detachment: Shoretroopers', description: '' },
      {
        name: 'Fire Support',
        description:
          'When another friendly unit performs a ranged attack, if you have a faceup order token, each mini in your unit may add an eligible weapon to the attack pool. If you do, flip your order token facedown. Limit 1 Fire Support per attack pool.',
      },
      {
        name: 'Full Pivot',
        description: 'When you pivot, you can pivot up to 360°',
      },
      {
        name: 'Reposition',
        description:
          'Either before or after you perform a standard move, you may perform a free pivot action.',
      },
      {
        name: 'Sentinel',
        description: 'Your standby range is 1-3',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'E-22 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { black: 1 },
      },
      {
        name: 'DF-90 Mortar',
        range: { from: 3, to: 4 },
        dice: { white: 3 },
        keywords: ['Critical 1', 'Cumbersome', 'Suppressive', 'Fixed: Front'],
      },
    ],
  },
];

export default units;
