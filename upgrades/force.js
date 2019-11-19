// @flow
import type { Upgrade } from '../types';

const upgrades: Upgrade[] = [
  {
    ldf: 'battlemeditation',
    name: 'Battle Meditation',
    side: 'neutral',
    slot: 'Force',
    points: 5,
    description:
      'While you are issuing orders using a command card, you may issue 1 of those orders to any friendly unit on the battlefeld, instead of a unit indicated on the command card.',
  },

  {
    ldf: 'forcechoke',
    name: 'Force Choke',
    side: 'dark',
    slot: 'Force',
    points: 5,
    exhaust: true,
    description:
      'Dark side only.\n\n[card action] Choose a non-commander non-operative trooper mini at range 1.  It suffers 1 wound.',
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
    points: 10,
    description: '[action] Gain 1 dodge token.',
  },
  {
    ldf: 'saberthrow',
    name: 'Saber Throw',
    side: 'neutral',
    slot: 'Force',
    points: 5,
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
  {
    ldf: 'hope',
    name: 'Hope',
    side: 'light',
    slot: 'Force',
    points: 3,
    description:
      'Light Side only.\n\nYou gain Inspire 1 (After your rally step, remove up to 1 suppression token from another friendly unit at range 1-2.)',
  },
  {
    ldf: 'forceguidance',
    name: 'Force Guidance',
    side: 'neutral',
    slot: 'Force',
    exhaust: true,
    points: 10,
    description:
      'Choose up to 2 friendly units at range 1-2. Each chosen unit gains 1 surge token.',
  },
  {
    ldf: 'fear',
    name: 'Fear',
    side: 'dark',
    slot: 'Force',
    points: 3,
    description:
      'You gain Demoralize 1 (After your Rally step, an enemy unit range 1-2 gains up to 1 suppression token.)',
  },
];

export default upgrades;
