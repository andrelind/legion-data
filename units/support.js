// @flow
import type { Unit } from '../types';

const units: Array<Unit> = [
  {
    ldf: 'atrt',
    name: 'AT-RT',
    side: 'light',
    points: 55,
    rank: 'Support',
    type: 'Vehicle',
    minis: 1,
    wounds: 6,
    resilience: 4,
    defense: 'white',
    surge: { attack: 'crit' },
    speed: 2,
    slots: ['Hardpoint', 'Comms'],
    keywords: [
      {
        name: 'Armor',
        description: 'While defending, cancel all [hit] results',
      },
      {
        name: 'Climbing Vehicle',
        description:
          'You are treated as a trooper for the purpose of vertical movement.',
      },
      {
        name: 'Expert Climber',
        description:
          'While clambering, do not roll defense dice or suffer wounds.',
      },
    ],
    weapons: [
      {
        name: 'Grappling Claws',
        range: { from: 0 },
        dice: { red: 3 },
        keywords: ['Impact 1'],
      },
      {
        name: 'A-300 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { white: 2 },
      },
    ],
  },

  {
    ldf: '74zspeederbikes',
    name: '74-Z Speeder Bikes',
    side: 'dark',
    points: 90,
    rank: 'Support',
    type: 'Vehicle',
    minis: 2,
    wounds: 3,
    resilience: 0,
    defense: 'white',
    surge: { attack: 'hit', defense: 'block' },
    speed: 3,
    slots: ['Comms'],
    keywords: [
      {
        name: 'Cover 1',
        description:
          'While defending against a ranged attack, improve cover by 1.',
      },
      {
        name: 'Speeder 1',
        description:
          'While moving, ignore terrain that is height 1 or lower. When you activate, perform a compulsory move.',
      },
    ],
    weapons: [
      {
        name: 'EC-14 Hold-Out Blaster',
        range: { from: 1, to: 2 },
        dice: { black: 2 },
      },
      {
        name: 'Ax-20 Blaster Cannon',
        range: { from: 1, to: 3 },
        dice: { red: 1, black: 1, white: 1 },
        keywords: ['Fixed: Front, Impact 1'],
      },
    ],
  },
];

export default units;
