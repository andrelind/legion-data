// @flow

import type { Upgrade } from '../types';

const upgrades: Upgrade[] = [
  {
    ldf: 'a300riflegunner',
    name: 'A-300 Rifle Gunner',
    points: 9,
    side: 'light',
    slot: 'Gunner',
    restrictions: {
      name: 'X-34 Landspeeder only',
      ldf: 'x34landspeeder',
    },
    weapon: {
      range: { from: 1, to: 3 },
      dice: { white: 2 },
    },
  },
  {
    ldf: 'rps6rocketgunner',
    name: 'RPS-6 Rocket Gunner',
    points: 36,
    side: 'light',
    slot: 'Gunner',
    restrictions: {
      name: 'X-34 Landspeeder only',
      ldf: 'x34landspeeder',
    },
    keywords: [
      {
        name: 'Impact 2',
        description:
          'While attacking a unit that has Armor, change up to 2 [Hit] results to [Crit] results.',
      },
    ],
    weapon: {
      range: { from: 2, to: 4 },
      dice: { white: 1, black: 1, red: 1 },
    },
  },
];

export default upgrades;
