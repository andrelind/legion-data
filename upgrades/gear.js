// @flow
import type { Upgrade } from '../types';

const upgrades: Upgrade[] = [
  {
    ldf: 'grapplinghooks',
    name: 'Grappling Hooks',
    side: 'neutral',
    slot: 'Gear',
    points: 3,
    keywords: [
      {
        name: 'You gain <strong>Expert Climber</strong>',
        description:
          'While clambering, do not roll defense dice or suffer wounds.',
      },
    ],
  },
  {
    ldf: 'targetingscopes',
    name: 'Targeting Scopes',
    side: 'neutral',
    slot: 'Gear',
    points: 6,
    keywords: [
      {
        name: 'You gain <strong>Precise 1</strong>',
        description:
          'When you spend an aim token, reroll up to 1 additional die.',
      },
    ],
  },
  {
    ldf: 'environmentalgear',
    name: 'Environmental Gear',
    side: 'neutral',
    slot: 'Gear',
    points: 3,
    keywords: [
      {
        name: 'You gain <strong>Unhindered</strong>',
        description: 'You ignore the effects of difficult terrain.',
      },
    ],
  },
];

export default upgrades;
