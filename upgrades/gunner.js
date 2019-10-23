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
  {
    ldf: 'barctwinlasergunner',
    name: 'BARC Twin Laser Gunner',
    points: 18,
    slot: 'Gunner',
    description: 'Reduce your maximum speed by 1.',
    restrictions: {
      name: 'BARC Speeder only',
      ldf: 'barcspeeder',
    },
    keywords: [
      {
        name: 'Fixed: Front, Rear',
        description: 'The defender must be inside your front or rear arc',
      },
    ],
    weapon: {
      range: { from: 1, to: 3 },
      dice: { black: 2, white: 2 },
    },
  },
  {
    ldf: 'barcrps6gunner',
    name: 'BARC RPS-6 Gunner',
    points: 24,
    slot: 'Gunner',
    description: 'Reduce your maximum speed by 1.',
    restrictions: {
      name: 'BARC Speeder only',
      ldf: 'barcspeeder',
    },
    keywords: [
      {
        name: 'Impact 2',
        description:
          'While attacking a unit that has Armor, change up to 2 [Hit] results to [Crit] results',
      },
    ],
    weapon: {
      range: { from: 2, to: 4 },
      dice: { red: 1, black: 1, white: 1 },
    },
  },
  {
    ldf: 'barciongunner',
    name: 'BARC Ion Gunner',
    points: 28,
    slot: 'Gunner',
    description: 'Reduce your maximum speed by 1.',
    restrictions: {
      name: 'BARC Speeder only',
      ldf: 'barcspeeder',
    },
    keywords: [
      {
        name: 'Fixed: Front, Rear',
        description: 'The defender must be inside your front or rear arc.',
      },
      {
        name: 'Impact 1',
        description:
          'While attacking a unit that has Armor, change up to 1 [Hit] results to [Crit] results',
      },
      {
        name: 'Ion',
        description:
          'A vehicle or droid wounded by this attack gains 1 ion token.',
      },
    ],
    weapon: {
      range: { from: 1, to: 3 },
      dice: { black: 3, white: 1 },
    },
  },
];

export default upgrades;
