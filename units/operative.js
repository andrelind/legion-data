// @flow
import type { Unit } from '../types';

const units: Array<Unit> = [
  {
    ldf: 'bobafett',
    unique: true,
    name: 'Boba Fett',
    subtitle: 'Infamous Bounty Hunter',
    side: 'dark',
    type: 'Trooper',
    points: 160,
    rank: 'Commander',
    minis: 1,
    wounds: 5,
    courage: 3,
    defense: 'red',
    surge: { attack: 'crit', defense: 'block' },
    speed: 3,
    slots: ['Elite', 'Elite', 'Gear', 'Gear'],
    keywords: [
      {
        name: '[action] Jump 2',
        description:
          'Perform a move during which you ignore terrain that is height 2 or lower. This is treated as a move action.',
      },
      {
        name: 'Arsenal 2',
        description:
          'While attacking, each mini in this unit can use up to 2 of its weapons',
      },
      {
        name: 'Sharpshooter 2',
        description:
          'While performing a ranged attack, reduce the defenders cover by 2.',
      },
      {
        name: 'Bounty',
        description:
          'After setup, place a victory token on an enemy commander or operative. If you defeat a unit with a victory token, move that token to you. At the end of the game, if you have a victory token, gain that token.',
      },
      {
        name: 'Impervious',
        description:
          'While defending, if the attack pool has Pierce X, roll X additional defense dice.',
      },
    ],
    weapons: [
      {
        name: 'Boot Spike',
        range: { from: 0 },
        dice: { red: 2 },
      },
      {
        name: "Fett's E-3 Carbine",
        range: { from: 1, to: 3 },
        dice: { black: 2 },
        keywords: ['Pierce 1'],
      },
      {
        name: 'Wrist Rocket',
        range: { from: 1, to: 2 },
        dice: { black: 2 },
        keywords: ['Impact 1'],
      },
    ],
  },
];

export default units;
