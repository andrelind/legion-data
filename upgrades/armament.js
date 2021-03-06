import type { Upgrade } from '../types';

const upgrades: Upgrade[] = [
  {
    ldf: 'a180pistolconfig',
    name: 'A-180 Pistol Config',
    points: 0,
    restrictions: { name: 'Jyn Erso only', ldf: 'jynerso' },
    side: 'light',
    slot: 'Armament',
    weapon: {
      name: 'A-180 Pistol Config',
      range: { from: 1, to: 2 },
      dice: { red: 2, white: 1 },
      keywords: [
        {
          name: 'Pierce 1',
          description: 'While attacking, cancel up to 1 [block] result.',
        },
        {
          name: 'Reconfigure',
          description: 'When you recover, you may flip this card.',
        },
      ],
    },
  },
  {
    ldf: 'a180rifleconfig',
    name: 'A-180 Rifle Config',
    points: 0,
    restrictions: { name: 'Jyn Erso only', ldf: 'jynerso' },
    side: 'light',
    slot: 'Armament',
    weapon: {
      name: 'A-180 Rifle Config',
      range: { from: 1, to: 3 },
      dice: { black: 2, white: 1 },
      keywords: [
        {
          name: 'Pierce 1',
          description: 'While attacking, cancel up to 1 [block] result.',
        },
        {
          name: 'Reconfigure',
          description: 'When you recover, you may flip this card.',
        },
      ],
    },
  },
  {
    ldf: 'a300shortrangeconfig',
    name: 'A-300 Short Range Config',
    points: 0,
    restrictions: { name: 'Rebel Pathfinders only', ldf: 'rebelpathfinders' },
    side: 'light',
    slot: 'Armament',
    weapon: {
      name: 'A-300 Short Range Config',
      range: { from: 1, to: 2 },
      dice: { red: 1 },
      keywords: [
        {
          name: 'Reconfigure',
          description: 'When you recover, you may flip this card.',
        },
      ],
    },
  },
  {
    ldf: 'a300longrangeconfig',
    name: 'A-300 Long Range Config',
    points: 6,
    restrictions: { name: 'Rebel Pathfinders only', ldf: 'rebelpathfinders' },
    side: 'light',
    slot: 'Armament',
    weapon: {
      name: 'A-300 Long Range Config',
      range: { from: 1, to: 4 },
      dice: { white: 1 },
      keywords: [
        {
          name: 'Reconfigure',
          description: 'When you recover, you may flip this card.',
        },
      ],
    },
  },
  {
    ldf: 'e11dgrenadelauncherconfig',
    name: 'E-11D Grenade Launcher Config',
    points: 8,
    restrictions: {
      name: 'Imperial Death Troopers only',
      ldf: 'imperialdeathtroopers',
    },
    side: 'dark',
    slot: 'Armament',
    exhaust: true,
    weapon: {
      name: 'E-11D Grenade Launcher Config',
      range: { from: 1, to: 2 },
      dice: { red: 1 },
      keywords: [
        {
          name: 'Blast',
          description: 'Ignore cover.',
        },
        {
          name: 'Reconfigure',
          description: 'When you recover, you may flip this card.',
        },
      ],
    },
  },
  {
    ldf: 'e11dfocusedfireconfig',
    name: 'E-11D Focused Fire Config',
    points: 8,
    restrictions: {
      name: 'Imperial Death Troopers only',
      ldf: 'imperialdeathtroopers',
    },
    side: 'dark',
    slot: 'Armament',
    exhaust: true,
    weapon: {
      name: 'E-11D Focused Fire Config',
      range: { from: 1, to: 4 },
      dice: { black: 1 },
      keywords: [
        {
          name: 'Suppressive',
          description:
            'After you perform an attack, the defender gains 1 suppression token.',
        },
        {
          name: 'Reconfigure',
          description: 'When you recover, you may flip this card.',
        },
      ],
    },
  },
  {
    ldf: 'thedarksaber',
    name: 'The Darksaber',
    points: 25,
    restrictions: {
      name: 'Sabine Wren',
      ldf: 'sabinewren',
    },
    side: 'light',
    slot: 'Armament',
    description:
      'You gain Dauntless (After you rally, if you are suppressed but not panicked, you may gain 1 suppression token to perform a free move action.)\n\nWhile defending against a melee attack, you gain Immune: Pierce.',
    keywords: ['Impact 1', 'Pierce 1'],
    weapon: {
      range: { from: 0, to: 0 },
      dice: { black: 5 },
    },
  },
  {
    ldf: 'dt57annihilator',
    name: 'DT-57 "Annihilator"',
    points: 12,
    restrictions: {
      name: 'General Grievous only',
      ldf: 'generalgrievous',
    },
    side: 'dark',
    slot: 'Armament',
    keywords: ['Critical 1', 'Pierce 1', 'Versatile'],
    weapon: {
      range: { from: 0, to: 2 },
      dice: { black: 2, white: 2 },
    },
  },
  {
    ldf: 't21blasterrifle',
    name: 'T-21 Blaster Rifle',
    points: 10,
    restrictions: {
      name: 'Dewback Rider only',
      ldf: 'dewbackrider',
    },
    side: 'dark',
    slot: 'Armament',
    keywords: ['Critical 2'],
    weapon: {
      range: { from: 1, to: 3 },
      dice: { white: 4 },
    },
  },
  {
    ldf: 'rt97cblasterrifle',
    name: 'RT-97C Blaster Rifle',
    points: 15,
    restrictions: {
      name: 'Dewback Rider only',
      ldf: 'dewbackrider',
    },
    side: 'dark',
    slot: 'Armament',
    weapon: {
      range: { from: 1, to: 4 },
      dice: { red: 1, white: 3 },
    },
  },
  {
    ldf: 'cr24flamerifle',
    name: 'CR-24 Flame Rifle',
    points: 20,
    restrictions: {
      name: 'Dewback Rider only',
      ldf: 'dewbackrider',
    },
    side: 'dark',
    slot: 'Armament',
    keywords: ['Blast', 'Spray'],
    weapon: {
      range: { from: 1, to: 1 },
      dice: { black: 1, white: 1 },
    },
  },
];

export default upgrades;
