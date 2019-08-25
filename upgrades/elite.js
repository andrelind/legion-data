// @flow
import type { Upgrade } from '../types';

const upgrades: Upgrade[] = [
  {
    ldf: 'duckandcover',
    name: 'Duck and Cover',
    side: 'neutral',
    slot: 'Elite',
    points: 8,
    description:
      'While defending against a ranged attack, during the Apply Dodge and Cover step, you may gain 1 suppression token.',
  },
  {
    ldf: 'hunter',
    name: 'Hunter',
    side: 'neutral',
    slot: 'Elite',
    points: 6,
    description:
      'While attacking a wounded trooper unit, during the Roll Attack Dice step, you may gain 1 aim token.',
  },
  {
    ldf: 'tenacity',
    name: 'Tenacity',
    side: 'neutral',
    slot: 'Elite',
    points: 4,
    description:
      'While performing a melee attack, if you are wounded or if one or more of your minis have been defeated, add 1 red attack die to your attack pool.',
  },
  {
    ldf: 'overwatch',
    name: 'Overwatch',
    side: 'neutral',
    slot: 'Elite',
    points: 4,
    description: 'You gain Sentinel. (Your standby range is 1-3.)',
  },
];

export default upgrades;
