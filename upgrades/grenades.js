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
    weapon: {
      range: { from: 1 },
      dice: { black: 1 },
    },
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
    weapon: {
      range: { from: 1 },
      dice: { black: 1 },
    },
  },
  {
    ldf: 'fragmentationgrenades',
    name: 'Fragmentation Grenades',
    side: 'neutral',
    slot: 'Grenades',
    points: 5,
    description:
      'While this weapon is in your attack pool, you gain attack "[surge]: [crit]."',
    keywords: [
      {
        name: 'Impact 1',
        description:
          'While attacking a unit that has armor, change up to 1 [hit] result to a [crit] result.',
      },
    ],
    weapon: {
      range: { from: 1 },
      dice: { red: 1 },
    },
  },
  {
    ldf: 'smokegrenades',
    name: 'Smoke Grenades',
    side: 'neutral',
    slot: 'Grenades',
    points: 6,
    description:
      'You gain [Card Action] Smoke 1 (Place 1 smoke token within range 1 and in line of sight of your unit leader.)',
    keywords: [
      {
        name: 'Smoke 1',
        description:
          'Place 1 smoke token within range 1 and in line of sight of your unit leader.',
      },
    ],
  },
];

export default upgrades;
