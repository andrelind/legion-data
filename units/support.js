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
    points: 75,
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
        keywords: ['Fixed: Front', 'Impact 1'],
      },
    ],
  },
  {
    ldf: 'ewebheavyblasterteam',
    name: 'E-Web Heavy Blaster Team',
    side: 'dark',
    points: 55,
    rank: 'Support',
    type: 'Emplacement Trooper',
    minis: 1,
    wounds: 4,
    courage: 2,
    defense: 'red',
    surge: { attack: 'crit' },
    speed: 1,
    slots: ['Comms', 'Generator'],
    keywords: [
      {
        name: 'Full Pivot',
        description: 'When you pivot, you can pivot up to 360°.',
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
        range: { from: 0 },
        dice: { black: 2 },
      },
      {
        name: 'E-11 Blaster Rifles',
        range: { from: 1, to: 3 },
        dice: { white: 2 },
      },
      {
        name: 'E-Web Heavy Blaster',
        range: { from: 1, to: 3 },
        dice: { red: 1, black: 2, white: 2 },
        keywords: ['Cumbersome', 'Fixed: Front'],
      },
    ],
  },
  {
    ldf: '14fdlasercannonteam',
    name: '1.4 FD Laser Cannon Team',
    side: 'light',
    points: 70,
    rank: 'Support',
    type: 'Emplacement Trooper',
    minis: 1,
    wounds: 6,
    courage: 2,
    defense: 'white',
    surge: { attack: 'hit', defense: 'block' },
    speed: 0,
    slots: ['Comms', 'Generator'],
    keywords: [
      {
        name: 'Full Pivot',
        description: 'When you pivot, you can pivot up to 360°.',
      },
      {
        name: 'Sentinel',
        description: 'Your standby range is 1-3.',
      },
      {
        name: 'Stationary',
        description: 'You cannot perform moves, except pivots.',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 2 },
      },
      {
        name: 'DH-17 Blaster Pistols',
        range: { from: 1, to: 2 },
        dice: { white: 4 },
      },
      {
        name: '1.4 FD Laser Cannon',
        range: { from: 1, to: 5 },
        dice: { black: 5 },
        keywords: ['Impact 2', 'Fixed: Front'],
      },
    ],
  },
  {
    ldf: 'tauntaunriders',
    name: 'Tauntaun Riders',
    side: 'light',
    points: 90,
    rank: 'Support',
    type: 'Creature Trooper',
    minis: 2,
    wounds: 4,
    courage: 2,
    defense: 'white',
    surge: { attack: 'hit', defense: 'block' },
    speed: 3,
    slots: ['Comms', 'Elite'],
    keywords: [
      {
        name: 'Agile 1',
        description: 'After you perform a standard move, gain 1 dodge token.',
      },
      {
        name: 'Relentless',
        description:
          'After you perform a move action, you may perform a free attack action.',
      },
      {
        name: 'Reposition',
        description:
          'Either before or after you perform a standard move, you may perform a free pivot action.',
      },
      {
        name: 'Sharpshooter 1',
        description:
          "While performing a ranged attack, reduce the defender's cover by 1.",
      },
      {
        name: 'Unhindered',
        description: 'You ignore the effects of difficult terrain.',
      },
    ],
    weapons: [
      {
        name: 'Horns & Hind Claws',
        range: { from: 0, to: 0 },
        dice: { white: 1, black: 2 },
        keywords: ['Ram 1'],
      },
      {
        name: 'DL-44 Blaster Pistol',
        range: { from: 1, to: 2 },
        dice: { red: 2 },
      },
    ],
  },
  {
    ldf: 'droidekas',
    name: 'Droidekas',
    side: 'dark',
    points: '100',
    rank: 'Support',
    type: 'Ground Vehicle',
    minis: 2,
    wounds: 3,
    resilience: 0,
    defense: 'white',
    surge: { defense: 'block' },
    speed: 1,
    slots: ['Comms'],
    keywords: [
      {
        name: 'AI: Attack, Move',
        description:
          'Unless you have a faceup order token, your first action must be an attack or move.',
      },
      {
        name: 'Generator 1',
        description: 'During the End Phase, flip 1 inactive shield token',
      },
      {
        name: 'Shielded',
        description: 'You have 4 shield tokens.',
      },
      {
        name: 'Wheel Mode',
        description:
          'When you activate, you may increase you maximum speed to 3. If you do, until the end of the round, you gain Cover 2 and cannot attack or flip active shield tokens',
      },
    ],
    weapons: [
      {
        name: 'Dual Twin Blaster Cannons',
        range: { from: 1, to: 3 },
        dice: { red: 1, black: 2 },
        keywords: ['Suppressive', 'Fixed: Front', 'Immune: Deflect'],
      },
    ],
  },
  {
    ldf: 'barcspeeder',
    name: 'BARC Speeder',
    side: 'light',
    points: '75',
    rank: 'Support',
    type: 'Repulsor Vehicle',
    minis: 1,
    wounds: 5,
    resilience: 3,
    defense: 'red',
    surge: { attack: 'hit' },
    speed: 3,
    slots: ['Comms', 'Gunner'],
    keywords: [
      {
        name: 'Arsenal 2',
        description:
          'While attacking, each model on this unit can use up to 2 of its weapons.',
      },
      {
        name: 'Cover 1',
        description:
          'While defending against a ranged attack, improve your cover by 1.',
      },
      {
        name: 'Speeder 1',
        description:
          'While moving, ignore terrain that is height 1 or lower. When you activate, perform a compulsory move.',
      },
    ],
    weapons: [
      {
        name: 'Twin Light Blaster Cannons',
        range: { from: 1, to: 3 },
        dice: { red: 1, black: 2, white: 1 },
        keywords: ['Fixed: Front'],
      },
    ],
  },
  {
    ldf: 'dewbackrider',
    name: 'Dewback Rider',
    side: 'dark',
    points: 90,
    rank: 'Support',
    type: 'Creature Trooper',
    minis: 1,
    wounds: 6,
    courage: 2,
    defense: 'red',
    surge: { attack: 'hit' },
    speed: 1,
    slots: ['Armament', 'Comms', 'Elite'],
    keywords: [
      {
        name: 'Armor 1',
        description: 'While defending, cancel up to 1 hit result.',
      },
      {
        name: 'Relentless',
        description:
          'After you perform a move action, you may perform a free attack action.',
      },
      {
        name: 'Reposition',
        description:
          'Either before or after you perform a standard move, you may perform a free pivot action.',
      },
      {
        name: 'Spur',
        description:
          'While performing a move, you may gain 1 suppression token to increase your maximum speed by 1.',
      },
      {
        name: 'Unhindered',
        description: 'You ignore the effects of difficult terrain.',
      },
    ],
    weapons: [
      {
        name: 'Razor Claws & Shock Prod',
        range: { from: 0, to: 0 },
        dice: { red: 3, white: 3 },
        keywords: ['Critical 2', 'Suppressive'],
      },
    ],
  },
];

export default units;
