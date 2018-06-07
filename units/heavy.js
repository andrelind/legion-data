// @flow
import type { Unit } from '../types';

const units: Array<Unit> = [
  {
    ldf: 't47airspeeder',
    name: 'T-47 Airspeeder',
    side: 'light',
    points: 175,
    rank: 'Heavy',
    type: 'Vehicle',
    minis: 1,
    wounds: 7,
    resilience: 5,
    defense: 'white',
    surge: { defense: 'block' },
    speed: 3,
    slots: ['Pilot', 'Hardpoint', 'Comms'],
    keywords: [
      {
        name: 'Armor',
        description: 'While defending, cancel all [hit] results',
      },
      {
        name: 'Arsenal 2',
        description:
          'While attacking, each mini in this unit can use up to 2 of its weapons',
      },
      {
        name: 'Cover 1',
        description: '',
      },
      {
        name: 'Immune: Blast, Melee',
        description: '',
      },
      {
        name: 'Speeder 2',
        description:
          'While moving, ignore terrain that is height 2 or lower. When you activate, perform a compulsory move.',
      },
    ],
    weapons: [
      {
        name: 'Ap/11 Double Laser Cannon',
        range: { from: 1, to: 3 },
        dice: { black: 3, red: 3 },
        keywords: ['Fixed: Front', 'Impact 3'],
      },
    ],
  },

  {
    ldf: 'atst',
    name: 'AT-ST',
    side: 'dark',
    points: 195,
    rank: 'Heavy',
    type: 'Vehicle',
    minis: 1,
    wounds: 11,
    resilience: 8,
    defense: 'white',
    surge: { defense: 'block' },
    speed: 2,
    slots: ['Pilot', 'Hardpoint', 'Hardpoint', 'Hardpoint', 'Comms'],
    keywords: [
      {
        name: 'Armor',
        description: 'While defending, cancel all [hit] results',
      },
      {
        name: 'Arsenal 2',
        description:
          'While attacking, each mini in this unit can use up to 2 of its weapons',
      },
      {
        name: 'Weak Point 1: Rear',
        description:
          "While defending, if the attacker's unit leader is inside your rear arc, the attack pool gains <strong>Impact 1</strong>",
      },
    ],
    weapons: [
      {
        name: 'Fence-Cutting Blades',
        range: { from: 0 },
        dice: { red: 4 },
      },
      {
        name: 'MS-4 Twin Blaster Cannon',
        range: { from: 1, to: 4 },
        dice: { red: 2, black: 2, white: 2 },
        keywords: ['Fixed: Front', 'Impact 3'],
      },
    ],
  },
];

export default units;
