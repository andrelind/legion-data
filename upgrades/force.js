// @flow
import type { Upgrade } from '../types';

const upgrades: Upgrade[] = [
  {
    ldf: 'battlemeditation',
    name: 'Battle Meditation',
    side: 'neutral',
    slot: 'Force',
    points: 10,
    description:
      'When you issue orders, one of those orders can be issued to any friendly unit on the battlefield.',
  },

  {
    ldf: 'forcechoke',
    name: 'Force Choke',
    side: 'dark',
    slot: 'Force',
    points: 5,
    description:
      '[action] Choose an enemy trooper mini at range 1 that is not a commander. It suffers 1 wound.',
  },
  {
    ldf: 'forcepush',
    name: 'Force Push',
    side: 'neutral',
    slot: 'Force',
    points: 10,
    description:
      '[action] Choose an enemy trooper unit at range 1. Perform a speed-1 move with that unit, even if it is engaged.',
  },
  {
    ldf: 'forcereflexes',
    name: 'Force Reflexes',
    side: 'neutral',
    slot: 'Force',
    points: 15,
    description: '[action] Gain 1 dodge token.',
  },
  {
    ldf: 'saberthrow',
    name: 'Saber Throw',
    side: 'neutral',
    slot: 'Force',
    points: 10,
    description:
      "[action] Choose 1 of your melee weapons. Perform a ranged attack with the weapon against an enemy unit at range 1-2, using half of that weapon's dice, rounded up. This is treated as an attack action.",
  },
  {
    ldf: 'jedimindtrick',
    name: 'Jedi Mind Trick',
    side: 'light',
    slot: 'Force',
    points: 5,
    description:
      'Choose an enemy trooper unit at range 1-2. It gains 2 suppression tokens.',
  },
  {
    ldf: 'anger',
    name: 'Anger',
    side: 'dark',
    slot: 'Force',
    points: 5,
    description: 'After you suffer 1 or more wounds, gain 1 aim token.',
  },
];

export default upgrades;
