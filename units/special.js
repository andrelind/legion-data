// @flow
import type { Unit } from '../types';

const units: Array<Unit> = [
  {
    ldf: 'rebelcommandos',
    name: 'Rebel Commandos',
    side: 'light',
    points: 60,
    rank: 'Special Forces',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 2,
    defense: 'white',
    surge: { attack: 'hit', defense: 'block' },
    speed: 2,
    slots: ['Heavy Weapon', 'Elite', 'Comms', 'Gear', 'Grenades'],
    keywords: [
      {
        name: 'Low Profile',
        description:
          'While defending, if you have light cover, increase your cover by 1.',
      },
      {
        name: 'Scout 2',
        description: 'After you deploy, you may perform a speed-2 move.',
      },
      {
        name: 'Sharpshooter 1',
        description:
          'While performing a ranged attack, reduce the defenders cover by 1.',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'A-280 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { black: 1 },
      },
    ],
  },
  {
    ldf: 'rebelcommandosstriketeam',
    name: 'Rebel Commandos Strike Team',
    side: 'light',
    points: 16,
    rank: 'Special Forces',
    type: 'Trooper',
    minis: 1,
    wounds: 1,
    courage: 2,
    defense: 'white',
    surge: { attack: 'hit', defense: 'block' },
    speed: 2,
    slots: ['Heavy Weapon', 'Elite', 'Comms', 'Gear', 'Grenades'],
    keywords: [
      {
        name: 'Heavy Weapon Team',
        description:
          'You must equip a Heavy Weapon upgrade card. The mini added by that card is the unit leader.',
      },
      {
        name: 'Low Profile',
        description:
          'While defending, if you have light cover, increase your cover by 1.',
      },
      {
        name: 'Scout 2',
        description: 'After you deploy, you may perform a speed-2 move.',
      },
      {
        name: 'Sharpshooter 1',
        description:
          'While performing a ranged attack, reduce the defenders cover by 1.',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'A-280 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { black: 1 },
      },
    ],
  },
  {
    ldf: 'scouttroopers',
    name: 'Scout Troopers',
    side: 'dark',
    points: 60,
    rank: 'Special Forces',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 2,
    defense: 'white',
    surge: { defense: 'block' },
    speed: 2,
    slots: ['Heavy Weapon', 'Elite', 'Comms', 'Gear', 'Grenades'],
    keywords: [
      {
        name: 'Low Profile',
        description:
          'While defending, if you have light cover, increase your cover by 1.',
      },
      {
        name: 'Scout 1',
        description: 'After you deploy, you may perform a speed-1 move.',
      },
      {
        name: 'Sharpshooter 1',
        description:
          'While performing a ranged attack, reduce the defenders cover by 1.',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'EC-17 Holdout Blaster',
        range: { from: 1, to: 2 },
        dice: { black: 2 },
      },
    ],
  },

  {
    ldf: 'scouttroopersstriketeam',
    name: 'Scout Troopers Strike Team',
    side: 'dark',
    points: 16,
    rank: 'Special Forces',
    type: 'Trooper',
    minis: 1,
    wounds: 1,
    courage: 2,
    defense: 'white',
    surge: { defense: 'block' },
    speed: 2,
    slots: ['Heavy Weapon', 'Elite', 'Comms', 'Gear', 'Grenades'],
    keywords: [
      {
        name: 'Heavy Weapon Team',
        description:
          'You must equip a Heavy Weapon upgrade card. The mini added by that card is the unit leader.',
      },
      {
        name: 'Low Profile',
        description:
          'While defending, if you have light cover, increase your cover by 1.',
      },
      {
        name: 'Scout 1',
        description: 'After you deploy, you may perform a speed-1 move.',
      },
      {
        name: 'Sharpshooter 1',
        description:
          'While performing a ranged attack, reduce the defenders cover by 1.',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'EC-17 Holdout Blaster',
        range: { from: 1, to: 2 },
        dice: { black: 2 },
      },
    ],
  },
  {
    ldf: 'imperialroyalguards',
    name: 'Imperial Royal Guards',
    side: 'dark',
    points: 75,
    rank: 'Special Forces',
    type: 'Trooper',
    minis: 3,
    wounds: 2,
    courage: 2,
    defense: 'red',
    surge: {},
    speed: 2,
    slots: ['Heavy Weapon', 'Elite', 'Comms', 'Gear', 'Grenades'],
    keywords: [
      {
        name: 'Charge',
        description:
          'After you perform a move action, you may perform a free melee attack action.',
      },
      {
        name: 'Disciplined 2',
        description:
          'When you are issued an order, you may remove up to 2 suppression tokens.',
      },
      {
        name: 'Guardian 2',
        description:
          'When a friendly unit at range 1 is defending against a ranged attack, you may choose to 2 hit results. For each result chosen, roll a defence die as though you were the defender.',
      },
    ],
    weapons: [
      {
        name: 'Force Pike',
        range: { from: 0 },
        dice: { red: 1, black: 1 },
      },
      {
        name: 'EC-17 Holdout Blaster',
        range: { from: 1, to: 2 },
        dice: { black: 2 },
      },
    ],
  },
];

export default units;
