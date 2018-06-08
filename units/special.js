// @flow
import type { Unit } from '../types';

const units: Array<Unit> = [
  {
    ldf: 'rebelcommandos',
    name: 'Rebel Commandos',
    side: 'light',
    points: 60,
    rank: 'Special Forces',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 2,
    defense: 'white',
    surge: { attack: 'hit', defense: 'block' },
    speed: 2,
    slots: ['Heavy Weapon', 'Elite', 'Comms', 'Gear', 'Grenades'],
    keywords: [
      {
        name: 'Low Profile',
        description:
          'While defending, if you have light cover, increase your cover by 1.',
      },
      {
        name: 'Scout 2',
        description: 'After you deploy, you may perform a speed-2 move.',
      },
      {
        name: 'Sharpshooter 1',
        description:
          'While performing a ranged attack, reduce the defenders cover by 1.',
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
    ldf: 'scouttroopers',
    name: 'Scout Troopers',
    side: 'dark',
    points: 60,
    rank: 'Special Forces',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 2,
    defense: 'white',
    surge: { attack: 'hit' },
    speed: 2,
    slots: ['Heavy Weapon', 'Elite', 'Comms', 'Gear', 'Grenades'],
    keywords: [
      {
        name: 'Low Profile',
        description:
          'While defending, if you have light cover, increase your cover by 1.',
      },
      {
        name: 'Scout 1',
        description: 'After you deploy, you may perform a speed-1 move.',
      },
      {
        name: 'Sharpshooter 1',
        description:
          'While performing a ranged attack, reduce the defenders cover by 1.',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'EC-17 Holdout Blaster',
        range: { from: 1, to: 2 },
        dice: { black: 2 },
      },
    ],
  },
];

export default units;
