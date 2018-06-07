// @flow
import type { Upgrade } from '../types';

const upgrades: Upgrade[] = [
  {
    ldf: 'dlt19stormtrooper',
    name: 'DLT-19 Stormtrooper',
    side: 'dark',
    slot: 'Heavy Weapon',
    points: 24,
    restrictions: { name: 'Stormtroopers only', ldf: 'stormtroopers' },
    description: 'Add 1 DLT-19 Stormtrooper mini',
    keywords: [
      {
        name: 'Impact 1',
        description:
          'While attacking a unit that has <strong>ARMOR</strong>, change up to 1 [hit] results into [crit] results.',
      },
    ],
    weapon: {
      range: { from: 1, to: 4 },
      dice: { red: 2 },
    },
  },
  {
    ldf: 'hh12stormtrooper',
    name: 'HH-12 Stormtrooper',
    side: 'dark',
    exhaust: true,
    slot: 'Heavy Weapon',
    restrictions: { name: 'Stormtroopers only', ldf: 'stormtroopers' },
    description: 'Add 1 HH-12 Stormtrooper mini',
    points: 34,
    keywords: [
      {
        name: 'Cumbersome',
        description:
          'You cannot use this weapon and move during the same activation',
      },
      {
        name: 'Impact 3',
        description:
          'While attacking a unit that has <strong>ARMOR</strong>, change up to 3 [hit] results into [crit] results.',
      },
    ],
    weapon: {
      range: { from: 2, to: 4 },
      dice: { black: 3 },
    },
  },
  {
    ldf: 'mpl57iontrooper',
    name: 'MPL-57 Ion Trooper',
    side: 'light',
    slot: 'Heavy Weapon',
    points: 32,
    exhaust: true,
    restrictions: { name: 'Rebel Troopers only', ldf: 'rebeltroopers' },
    description: 'Add 1 MPL-57 ion trooper figure',
    keywords: [
      {
        name: 'Impact 1',
        description:
          'While attacking a unit that has <strong>ARMOR</strong>, change up to 1 [hit] results into [crit] results.',
      },
      {
        name: 'Ion 1',
        description:
          'A vehicle wounded by an attack that includes this weapon gains 1 ion token.',
      },
    ],
    weapon: {
      range: { from: 1, to: 3 },
      dice: { red: 2 },
    },
  },
  {
    ldf: 'z6trooper',
    name: 'Z-6 Trooper',
    side: 'light',
    slot: 'Heavy Weapon',
    restrictions: { name: 'Rebel Troopers only', ldf: 'rebeltroopers' },
    points: 22,
    description: 'Add 1 Z-6 Trooper mini',
    weapon: {
      range: { from: 1, to: 3 },
      dice: { white: 6 },
    },
  },
  {
    ldf: 't7ionsnowtrooper',
    name: 'T-7 Ion Snowtrooper',
    side: 'dark',
    slot: 'Heavy Weapon',
    points: 34,
    exhaust: true,
    restrictions: { name: 'Snowtroopers only', ldf: 'snowtroopers' },
    description: 'Add 1 T-7 Ion trooper figure',
    keywords: [
      {
        name: 'Impact 1',
        description:
          'While attacking a unit that has <strong>ARMOR</strong>, change up to 1 [hit] results into [crit] results.',
      },
      {
        name: 'Ion 1',
        description:
          'A vehicle wounded by an attack that includes this weapon gains 1 ion token.',
      },
    ],
    weapon: {
      range: { from: 1, to: 2 },
      dice: { black: 1, white: 2 },
    },
  },
  {
    ldf: 'scatterguntrooper',
    name: 'Scatter Gun Trooper',
    side: 'light',
    slot: 'Heavy Weapon',
    points: 23,
    restrictions: { name: 'Fleet Troopers only', ldf: 'fleettroopers' },
    description: 'Add 1 Scatter Gun Trooper figure',
    keywords: [
      {
        name: 'Pierce 1',
        description: 'While attacking cancel up to 1 block result.',
      },
    ],
    weapon: {
      range: { from: 1, to: 2 },
      dice: { red: 2 },
    },
  },
  {
    ldf: 'mpl57barragetrooper',
    name: 'MPL-57 Barrage Trooper',
    side: 'light',
    slot: 'Heavy Weapon',
    points: 33,
    restrictions: { name: 'Fleet Troopers only', ldf: 'fleettroopers' },
    description: 'Add 1 MPL-57 barrage trooper mini',
    exhaust: true,
    keywords: [
      {
        name: 'Blast',
        description: 'Ignore cover.',
      },
      {
        name: 'Impact 2',
        description:
          'While attacking a unit that has <strong>ARMOR</strong>, change up to 2 [hit] results into [crit] results.',
      },
    ],
    weapon: {
      range: { from: 1, to: 3 },
      dice: { black: 1, white: 2 },
    },
  },
  {
    ldf: 'flametrooper',
    name: 'Flametrooper',
    side: 'dark',
    slot: 'Heavy Weapon',
    points: 20,
    restrictions: { name: 'Snowtroopers only', ldf: 'snowtroopers' },
    description: 'Add 1 Flametrooper figure',
    keywords: [
      {
        name: 'Blast',
        description: 'Ignore cover.',
      },
      {
        name: 'Spray',
        description:
          "Add this weapon's dice to the attack pool one time for each mini in the defending unit to which line of sight is not blocked.",
      },
    ],
    weapon: {
      range: { from: 1 },
      dice: { black: 1 },
    },
  },
];

export default upgrades;
