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
        description: '(After you are issued an order, gain 1 dodge token.)',
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
];

export default units;
