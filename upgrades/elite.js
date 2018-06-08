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
];

export default upgrades;
