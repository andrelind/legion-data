// @flow
import type { Unit } from '../types';

const units: Array<Unit> = [
  {
    ldf: 'bobafett',
    unique: true,
    name: 'Boba Fett',
    subtitle: 'Infamous Bounty Hunter',
    side: 'dark',
    type: 'Trooper',
    points: 160,
    rank: 'Operative',
    minis: 1,
    wounds: 5,
    courage: 3,
    defense: 'red',
    surge: { attack: 'crit', defense: 'block' },
    speed: 3,
    slots: ['Elite', 'Elite', 'Gear', 'Gear'],
    keywords: [
      {
        name: '[action] Jump 2',
        description:
          'Perform a move during which you ignore terrain that is height 2 or lower. This is treated as a move action.',
      },
      {
        name: 'Arsenal 2',
        description:
          'While attacking, each mini in this unit can use up to 2 of its weapons',
      },
      {
        name: 'Sharpshooter 2',
        description:
          'While performing a ranged attack, reduce the defenders cover by 2.',
      },
      {
        name: 'Bounty',
        description:
          'After setup, place a victory token on an enemy commander or operative. If you defeat a unit with a victory token, move that token to you. At the end of the game, if you have a victory token, gain that token.',
      },
      {
        name: 'Impervious',
        description:
          'While defending, if the attack pool has Pierce X, roll X additional defense dice.',
      },
    ],
    weapons: [
      {
        name: 'Boot Spike',
        range: { from: 0 },
        dice: { red: 2 },
      },
      {
        name: "Fett's E-3 Carbine",
        range: { from: 1, to: 3 },
        dice: { black: 2 },
        keywords: ['Pierce 1'],
      },
      {
        name: 'Wrist Rocket',
        range: { from: 1, to: 2 },
        dice: { black: 2 },
        keywords: ['Impact 1'],
      },
    ],
    commandCards: ['whipcordlauncher', 'zxflameprojector', 'z6jetpackrocket'],
  },
  {
    ldf: 'chewbacca',
    name: 'Chewbacca',
    side: 'light',
    points: 110,
    rank: 'Operative',
    type: 'Trooper',
    minis: 1,
    wounds: 9,
    courage: 2,
    defense: 'white',
    surge: { attack: 'crit' },
    speed: 2,
    slots: ['Elite', 'Elite', 'Gear'],
    keywords: [
      {
        name: 'Enrage 4',
        description:
          'While you have 4 or more wound tokens, treat your courage as "-" and gain Charge.',
      },
      {
        name: 'Expert Climber',
        description:
          'While clambering, do not roll defense dice or suffer wounds.',
      },
      {
        name: 'Guardian 3',
        description:
          'When a friendly unit at range 1 is defending against a ranged attack, you may choose up to 3 [hit] results. For each result chosen, roll a defense die as though you were the defender.',
      },
      {
        name: 'Teamwork: Han Solo',
        description:
          'While you are at range 1-2 of Han Solo, when you or Han Solo gains an aim or dodge token, then other unit gains a token of the same type.',
      },
      {
        name: 'Unhindered',
        description: 'You ignore the effects of difficult terrain.',
      },
    ],
    weapons: [
      {
        name: 'Overpower',
        range: { from: 0 },
        dice: { red: 4 },
      },
      {
        name: "Chewbacca's Bowcaster",
        range: { from: 1, to: 3 },
        dice: { red: 2, white: 2 },
        keywords: ['Impact 1', 'Pierce 1'],
      },
    ],
    commandCards: ['commoncause', 'brainsandbrawn', 'notoriousscoundrels'],
  },
  {
    ldf: 'sabinewren',
    name: 'Sabine Wren',
    side: 'light',
    points: 125,
    rank: 'Operative',
    type: 'Trooper',
    minis: 1,
    wounds: 5,
    courage: 2,
    defense: 'red',
    surge: { attack: 'crit', defense: 'block' },
    speed: 3,
    slots: ['Training', 'Gear', 'Gear', 'Armament'],
    keywords: [
      {
        name: 'Jump 2',
        description:
          'Perform a move during which you ignore terrain that is height 2 or lower. This is treated as a move action.',
      },
      {
        name: 'Gunslinger',
        description:
          'After you perform a ranged attack action, you may perform an additional ranged attack against a different unit.',
      },
      {
        name: 'Impervious',
        description:
          'While defending, if the attack pool has Pierce X, roll X additional dice.',
      },
      {
        name: 'Nimble',
        description:
          'After defending, if you spent 1 or more dodge tokens, gain 1 dodge token.',
      },
    ],
    weapons: [
      {
        name: 'Combat Expertise',
        range: { from: 0 },
        dice: { black: 2 },
      },
      {
        name: 'Dual Westar-35 Blaster Pistols',
        range: { from: 1, to: 2 },
        dice: { red: 1, black: 1, white: 1 },
        keywords: ['Pierce 1'],
      },
    ],
    commandCards: ['explosions', 'symbolofrebellion', 'legacyofmandalore'],
  },
];

export default units;
