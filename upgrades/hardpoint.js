// @flow
import type { Upgrade } from '../types';

const upgrades: Upgrade[] = [
  {
    ldf: 'atrtlasercannon',
    name: 'AT-RT Laser Cannon',
    side: 'light',
    slot: 'Hardpoint',
    points: 35,
    restrictions: { name: 'AT-RT only', ldf: 'atrt' },
    keywords: [
      {
        name: 'Impact 3',
        description:
          'While attacking a unit that has armor, change up to 3 [hit] results to [crit] results.)',
      },
      {
        name: 'Fixed: Front',
        description: 'The defender must be inside your front arc.',
      },
    ],
    weapon: {
      range: { from: 1, to: 4 },
      dice: { red: 1, black: 2 },
    },
  },
  {
    ldf: 'atrtrotaryblaster',
    name: 'AT-RT Rotary Blaster',
    side: 'light',
    slot: 'Hardpoint',
    exhaust: false,
    restrictions: { name: 'AT-RT only', ldf: 'atrt' },
    points: 30,
    keywords: [
      {
        name: 'Fixed: Front',
        description: 'The defender must be inside your front arc.',
      },
    ],
    weapon: {
      range: { from: 1, to: 3 },
      dice: { black: 5 },
    },
  },
  {
    ldf: 'atrtflamethrower',
    name: 'AT-RT Flame Thrower',
    side: 'light',
    slot: 'Hardpoint',
    restrictions: { name: 'AT-RT only', ldf: 'atrt' },
    points: 25,
    keywords: [
      {
        name: 'Blast',
        description: 'Ignore cover.',
      },
      {
        name: 'Fixed: Front',
        description: 'The defender must be inside your front arc.',
      },
      {
        name: 'Spray',
        description:
          "Add this weapon's dice to the attack pool one time for each mini in the defending unit to which line of sight is not blocked.",
      },
    ],
    weapon: {
      range: { from: 0, to: 1 },
      dice: { black: 2 },
    },
  },
  {
    ldf: '88twinlightblastercannon',
    name: '88 Twin Light Blaster Cannon',
    side: 'dark',
    slot: 'Hardpoint',
    points: 20,
    restrictions: { name: 'AT-ST only', ldf: 'atst' },
    keywords: [
      {
        name: 'Impact 1',
        description:
          'While attacking a unit that has armor, change up to 1 [hit] results to [crit] results.',
      },
      {
        name: 'Fixed: Front',
        description: 'The defender must be inside your front arc.',
      },
    ],
    weapon: {
      range: { from: 1, to: 3 },
      dice: { red: 1, black: 1, white: 1 },
    },
  },
  {
    ldf: 'atstmortarlauncher',
    name: 'AT-ST Mortar Launcher',
    side: 'dark',
    slot: 'Hardpoint',
    points: 10,
    restrictions: { name: 'AT-ST only', ldf: 'atst' },
    keywords: [
      {
        name: 'Suppressive',
        description:
          'After you perform an attack, the defender that this weapon was used against gains 1 suppression token.',
      },
      {
        name: 'Fixed: Front',
        description: 'The defender must be inside your front arc.',
      },
    ],
    weapon: {
      range: { from: 4 },
      dice: { white: 3 },
    },
  },
  {
    ldf: 'dw3concussiongrenadelauncher',
    name: 'DW-3 Concussion Grenade Launcher',
    side: 'dark',
    slot: 'Hardpoint',
    points: 15,
    restrictions: { name: 'AT-ST only', ldf: 'atst' },
    keywords: [
      {
        name: 'Blast',
        description: 'Ignore cover.',
      },
      {
        name: 'Fixed: Front',
        description: 'The defender must be inside your front arc.',
      },
    ],
    weapon: {
      range: { from: 1, to: 2 },
      dice: { black: 2 },
    },
  },
  {
    ldf: 'ax108groundbuzzer',
    name: 'Ax-108 Ground Buzzer',
    side: 'light',
    slot: 'Hardpoint',
    points: 20,
    restrictions: { name: 'T-47 Airspeeder only', ldf: 't47airspeeder' },
    keywords: [
      {
        name: 'Fixed: Rear',
        description: 'The defender must be inside your rear arc.',
      },
    ],
    weapon: {
      range: { from: 1, to: 2 },
      dice: { black: 4 },
    },
  },
  {
    ldf: 'modkpowerharpoon',
    name: 'MoDk Power Harpoon',
    side: 'light',
    slot: 'Hardpoint',
    points: 8,
    restrictions: { name: 'T-47 Airspeeder only', ldf: 't47airspeeder' },
    keywords: [
      {
        name: 'Impact 1',
        description:
          'While attacking a unit that has armor, change up to 1 [hit] results to [crit] results.',
      },
      {
        name: 'Fixed: Rear',
        description: 'The defender must be inside your rear arc.',
      },
      {
        name: 'Tow Cable',
        description:
          'After a vehicle is wounded by an attack that includes this weapon, perform a pivot with that vehicle.',
      },
    ],
    weapon: {
      range: { from: 1, to: 2 },
      dice: { red: 1 },
    },
  },
];

export default upgrades;