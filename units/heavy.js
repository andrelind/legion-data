// @flow
import type { Unit } from '../types';

const units: Array<Unit> = [
  {
    ldf: 't47airspeeder',
    name: 'T-47 Airspeeder',
    side: 'light',
    points: 140,
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
      {
        name: 'Immune: Range 1 Weapons',
        description: '',
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
    points: 170,
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
          "While defending, if the attacker's unit leader is inside your rear arc, the attack pool gains <strong>IMPACT 1</strong>",
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
  {
    ldf: 'tx225gavwoccupiercombatassaulttank',
    name: 'TX-225 GAVw Occupier Combat Assault Tank',
    side: 'dark',
    points: 155,
    rank: 'Heavy',
    type: 'Vehicle',
    minis: 1,
    wounds: 8,
    resilience: 6,
    defense: 'red',
    surge: {},
    speed: 1,
    slots: ['Comms', 'Hardpoint', 'Pilot'],
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
        name: 'Weak Point 1: Sides',
        description:
          "While defending, if the attacker's unit leader is inside your side arcs, the attack pool gains Impact 1",
      },
      {
        name: 'Reposition',
        description:
          'Either before or after you perform a standard move, you may perform a free pivot action.',
      },
      {
        name: 'Transport 1: Open',
        description:
          'You may transport one friendly trooper unit. After defending, if you suffered 1 or more wounds, each unit you were transporting suffers 1 wound.',
      },
    ],
    weapons: [
      {
        name: 'Forward Twin MK 2E/W Cannons',
        range: { from: 1, to: 2 },
        dice: { black: 1, red: 1 },
        keywords: ['Suppressive', 'Fixed: Front'],
      },
      {
        name: 'Lateral Quad MK 2E/W Cannons',
        range: { from: 1, to: 4 },
        dice: { black: 2, red: 2 },
        keywords: ['Impact 2', 'Fixed: Front'],
      },
    ],
  },
  {
    ldf: 'x34landspeeder',
    name: 'X-34 Landspeeder',
    side: 'light',
    points: 75,
    rank: 'Heavy',
    type: 'Vehicle',
    minis: 1,
    wounds: 6,
    resilience: 4,
    defense: 'white',
    surge: { attack: 'hit', defense: 'block' },
    speed: 2,
    slots: ['Comms', 'Crew', 'Crew', 'Hardpoint', 'Pilot'],
    keywords: [
      {
        name: 'Armor 2',
        description: 'While defending, cancel up to 2 [hit] results',
      },
      {
        name: 'Arsenal 3',
        description:
          'While attacking, each mini in this unit can use up to 3 of its weapons',
      },
      {
        name: 'Cover 1',
        description:
          'While defending against a ranged attack, improve your cover by 1.',
      },
      {
        name: 'Light Transport 1: Open',
        description:
          'You may transport one friendly trooper unit that consists of exactly 1 small base unit. After defending, if you suffered 1 or more wounds, each unit you were transporting suffers 1 wound.',
      },
      {
        name: 'Speeder 1',
        description:
          'While moving, ignore terrain that is height 1 or lower. When you activate, perform a compulsory move.',
      },
    ],
    weapons: [
      {
        name: "Driver's DH- 17 Blaster Pistol",
        range: { from: 1, to: 2 },
        dice: { white: 1 },
      },
    ],
  },
];

export default units;
