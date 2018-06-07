// @flow
import type { Upgrade } from '../types';

const upgrades: Upgrade[] = [
  {
    ldf: 'concussiongrenades',
    name: 'Concussion Grenades',
    side: 'neutral',
    slot: 'Grenades',
    points: 5,
    keywords: [
      {
        name: 'Blast',
        description: 'Ignore cover.',
      },
    ],
  },
  {
    ldf: 'impactgrenades',
    name: 'Impact Grenades',
    side: 'neutral',
    slot: 'Grenades',
    points: 5,
    keywords: [
      {
        name: 'Impact 1',
        description:
          'While attacking a unit that has armor, change up to 1 [hit] result to a [crit] result.',
      },
    ],
  },
];

export default upgrades;
