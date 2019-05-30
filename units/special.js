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
    ldf: 'wookieewarriors',
    name: 'Wookiee Warriors',
    side: 'light',
    points: 75,
    rank: 'Special Forces',
    type: 'Trooper',
    minis: 3,
    wounds: 3,
    courage: 2,
    defense: 'white',
    surge: { attack: 'hit' },
    speed: 2,
    slots: ['Heavy Weapon', 'Elite', 'Elite', 'Gear', 'Grenades'],
    keywords: [
      {
        name: 'Charge',
        description:
          'After you perform a move action, you may perform a free melee attack action.',
      },
      {
        name: 'Expert Climber',
        description:
          'While clambering, do not roll defense dice or suffer wounds.',
      },
      {
        name: 'Indomitable',
        description:
          'During your Rally step, roll red defense dice instead of white.',
      },
      {
        name: 'Unhindered',
        description: 'You ignore the effects of difficult terrain.',
      },
    ],
    weapons: [
      {
        name: 'Ryyk Blade',
        range: { from: 0 },
        dice: { black: 2 },
      },
      {
        name: 'Kashyyyk Pistol',
        range: { from: 1, to: 2 },
        dice: { black: 2, white: 1 },
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
  {
    ldf: 'rebelpathfinders',
    name: 'Rebel Pathfinders',
    side: 'light',
    points: 60,
    rank: 'Special Forces',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 2,
    defense: 'white',
    surge: { attack: 'hit', defend: 'block' },
    speed: 2,
    slots: [
      'Armament',
      'Comms',
      'Gear',
      'Grenades',
      'Heavy Weapon',
      'Training',
    ],
    keywords: [
      {
        name: 'Danger Sense 3',
        description:
          'You may choose not to remove your suppression tokens. While defending against a ranged attack, roll 1 extra defense die for each suppression token you have, adding up to 3 extra dice.',
      },
      {
        name: 'Dauntless',
        description:
          'After you rally, if you are suppressed but not panicked, you may gain 1 suppression token to perform a free move action.',
      },
      {
        name: 'Infiltrate',
        description:
          'You may deploy anywhere beyond range 3 of all enemy units.',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'A-300 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { white: 2 },
      },
    ],
  },
  {
    ldf: 'imperialdeathtroopers',
    name: 'Imperial Death Troopers',
    side: 'dark',
    points: 76,
    rank: 'Special Forces',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 2,
    defense: 'white',
    surge: { attack: 'hit', defend: 'block' },
    speed: 2,
    slots: [
      'Armament',
      'Comms',
      'Gear',
      'Grenades',
      'Heavy Weapon',
      'Training',
    ],
    keywords: [
      {
        name: 'Disciplined 1',
        description:
          'When you are issued an order, you may remove up to 1 suppression token.',
      },
      {
        name: 'Precise 2',
        description:
          'When you spend an aim token, reroll up to 2 additional dice.',
      },
      {
        name: 'Ready 1',
        description: 'After you perform a standby action, gain 1 aim token.',
      },
    ],
    weapons: [
      {
        name: 'Close Quarters Combat',
        range: { from: 0 },
        dice: { red: 1 },
      },
      {
        name: 'SE-14r Light Blaster',
        range: { from: 1, to: 2 },
        dice: { white: 2 },
      },
      {
        name: 'E-11D Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { black: 1 },
      },
    ],
  },
];

export default units;
