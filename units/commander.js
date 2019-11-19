// @flow
import type { Unit } from '../types';

const units: Unit[] = [
  {
    ldf: 'lukeskywalker',
    unique: true,
    name: 'Luke Skywalker',
    subtitle: 'Hero of the Rebellion',
    side: 'light',
    type: 'Trooper',
    points: 160,
    rank: 'Commander',
    minis: 1,
    wounds: 6,
    courage: 3,
    defense: 'red',
    surge: { attack: 'crit' },
    speed: 2,
    slots: ['Force', 'Force', 'Gear'],
    keywords: [
      {
        name: '[action] Jump 1',
        description:
          'Perform a move during which you ignore terrain that is height 1 or lower. This is treated as a move action.',
      },
      {
        name: 'Charge',
        description:
          'After you perform a move action, you may perform a free melee attack.',
      },
      {
        name: 'Deflect',
        description:
          'While defending, if you spend a dodge token, you gain "[defense_surge]:[block]"; if it\'s a ranged attack, the attacker suffers 1 wound for each [defense_surge] rolled',
      },
      {
        name: 'Immune: Pierce',
        description: 'Pierce cannot be used against you',
      },
    ],
    weapons: [
      {
        name: "Anakin's Lightsaber",
        range: { from: 0 },
        dice: { black: 6 },
        keywords: ['Impact 2', 'Pierce 2'],
      },
      {
        name: "Luke's DL-44 Blaster Pistol",
        range: { from: 1, to: 2 },
        dice: { red: 2 },
        keywords: ['Pierce 2'],
      },
    ],
    commandCards: ['sonofskywalker', 'myallyistheforce', 'returnofthejedi'],
  },

  {
    ldf: 'darthvader',
    unique: true,
    name: 'Darth Vader',
    subtitle: 'Dark Lord of the Sith',
    side: 'dark',
    type: 'Trooper',
    points: 190,
    rank: 'Commander',
    minis: 1,
    wounds: 8,
    courage: 0,
    defense: 'red',
    surge: {},
    speed: 1,
    slots: ['Force', 'Force', 'Force'],
    keywords: [
      {
        name: 'Deflect',
        description:
          'While defending, if you spend a dodge token, you gain "[defense_surge]:[block]"; if it\'s a ranged attack, he attacker suffers 1 wound for each [defense_surge] rolled',
      },
      {
        name: 'Immune: Pierce',
        description: 'Pierce cannot be used against you',
      },
      {
        name: 'Master of the Force 1',
        description:
          'During the End Phase, you may ready one of your [force] upgrade cards.',
      },
      {
        name: 'Relentless',
        description:
          'After you perform a move action, you may perform a free attack action.',
      },
    ],
    weapons: [
      {
        name: "Vader's Lightsaber",
        range: { from: 0 },
        dice: { red: 6 },
        keywords: ['Impact 3', 'Pierce 3'],
      },
    ],
    commandCards: ['implacable', 'newwaystomotivatethem', 'masterofevil'],
  },
  {
    ldf: 'generalveers',
    unique: true,
    name: 'General Veers',
    subtitle: 'Master Tactician',
    side: 'dark',
    type: 'Trooper',
    points: 80,
    rank: 'Commander',
    minis: 1,
    wounds: 5,
    courage: 2,
    defense: 'red',
    surge: { attack: 'crit' },
    speed: 2,
    slots: ['Command', 'Command', 'Gear'],
    keywords: [
      {
        name: '[action] Spotter 2',
        description:
          'Choose up to 2 friendly units at range 1. Each chosen unit gains an aim token.',
      },
      {
        name: 'Inspire 1',
        description:
          'After your Rally step, remove up to 1 suppression token from another friendly unit at range 1-2.',
      },
      {
        name: 'Precise 1',
        description: '',
      },
      {
        name: 'Sharpshooter 1',
        description:
          'While performing a ranged attack, reduce the defenders cover by 1.',
      },
    ],
    weapons: [
      {
        name: 'Combat Expertise',
        range: { from: 0 },
        dice: { black: 2 },
      },
      {
        name: 'Veers´ E-11 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { white: 3 },
        keywords: ['Pierce 1'],
      },
    ],
    commandCards: [
      'maximumfirepower',
      'evasivemaneuvers',
      'imperialdiscipline',
    ],
  },
  {
    ldf: 'leiaorgana',
    name: 'Leia Organa',
    subtitle: 'Fearless and',
    unique: true,
    side: 'light',
    type: 'Trooper',
    points: 90,
    rank: 'Commander',
    minis: 1,
    wounds: 6,
    courage: 2,
    defense: 'white',
    surge: { attack: 'crit', defense: 'block' },
    speed: 2,
    slots: ['Command', 'Command', 'Gear'],
    keywords: [
      {
        name: '[action] Take Cover 2',
        description:
          'Choose up to 2 friendly trooper units at range 1. Each chosen unit gains a dodge token.',
      },
      {
        name: 'Inspire 2',
        description:
          'After your Rally step, remove up to 2 suppression tokens from another friendly unit at range 1-2.',
      },
      {
        name: 'Nimble',
        description:
          'After defending, if you spent 1 or more dodge tokens, gain 1 dodge token.',
      },
      {
        name: 'Sharpshooter 2',
        description:
          'While performing a ranged attack, reduce the defenders cover by 2.',
      },
    ],
    weapons: [
      {
        name: 'Martial Arts',
        range: { from: 0 },
        dice: { black: 3 },
      },
      {
        name: "Leia's Defender Sporting Blaster",
        range: { from: 1, to: 2 },
        dice: { black: 3 },
        keywords: ['Pierce 1'],
      },
    ],
    commandCards: [
      'coordinatedbombardment',
      'notimeforsorrows',
      'somebodyhastosaveourskins',
    ],
  },
  {
    ldf: 'hansolo',
    name: 'Han Solo',
    // subtitle: '',
    unique: true,
    side: 'light',
    type: 'Trooper',
    points: 120,
    rank: 'Commander',
    minis: 1,
    wounds: 6,
    courage: 2,
    defense: 'white',
    surge: { attack: 'crit', defense: 'block' },
    speed: 2,
    slots: ['Command', 'Elite', 'Gear'],
    keywords: [
      {
        name: 'Low Profile',
        description:
          'While you are defending, if you have light cover, improve your cover by 1.',
      },
      {
        name: 'Gunslinger',
        description:
          'After you perform a ranged attack action, you may perform an additional ranged attack action against a different unit.',
      },
      {
        name: 'Sharpshooter 1',
        description:
          'While performing a ranged attack, reduce the defenders cover by 1.',
      },
      {
        name: 'Uncanny Luck 2',
        description: 'While defending, you may reroll up to 2 defense dice.',
      },
    ],
    weapons: [
      {
        name: 'Brawl',
        range: { from: 0 },
        dice: { white: 3 },
      },
      {
        name: "Han's DL-44 Blaster Pistol",
        range: { from: 1, to: 2 },
        dice: { red: 2 },
        keywords: ['Pierce 2'],
      },
    ],
    commandCards: ['sorryaboutthemess', 'recklessdiversion', 'changeofplans'],
  },
  {
    ldf: 'emperorpalpatine',
    name: 'Emperor Palpatine',
    // subtitle: '',
    unique: true,
    side: 'dark',
    type: 'Trooper',
    points: 210,
    rank: 'Commander',
    minis: 1,
    wounds: 5,
    courage: 4,
    defense: 'red',
    surge: { attack: 'crit', defense: 'block' },
    speed: 1,
    slots: ['Force', 'Force', 'Force', 'Command'],
    keywords: [
      {
        name: 'Pulling the Strings',
        description:
          'Choose a friendly trooper unit at range 1-2. That unit may perform a free attack action of a free move action.',
      },
      {
        name: 'Entourage: Imperial Royal Guards',
        description:
          'While building an army, ignore the rank of 1 Imperial Royal Guards unit. During the Command Phase, you may issue an order to a friendly Imperial Royal Guards unit at range 1-2.',
      },
      {
        name: 'Immune: Pierce',
        description: 'Pierce cannot be used againt you.',
      },
      {
        name: 'Master of the Force 2',
        description:
          'During the End Phase, you may ready 2 of your Force upgrade cards.',
      },
    ],
    weapons: [
      {
        name: 'Force Lightning',
        range: { from: 0, to: 2 },
        dice: { red: 2, black: 2, white: 2 },
        keywords: ['Pierce 2', 'Suppressive'],
      },
    ],
    commandCards: ['andnowyouwilldie', 'giveintoyouranger', 'anentirelegion'],
  },
  {
    ldf: 'rebelofficer',
    name: 'Rebel Officer',
    unique: false,
    side: 'light',
    type: 'Trooper',
    points: 50,
    rank: 'Commander',
    minis: 1,
    wounds: 4,
    courage: 2,
    defense: 'white',
    surge: { attack: 'hit', defense: 'block' },
    speed: 2,
    slots: ['Command', 'Gear'],
    keywords: [
      {
        name: 'Take Cover 1',
        description:
          'Choose up to 1 friendly trooper unit at range 1. That unit gains a dodge token.',
      },
      {
        name: 'Inspire 1',
        description:
          'After your Rally step, remove 1 suppression token from another friendly unit at range 1-2.',
      },
      {
        name: 'Sharpshooter 1',
        description:
          'While performing a ranged attack, reduce the defender’s cover by 1.',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: "Officer's A-180 Blaster Pistol",
        range: { from: 1, to: 2 },
        dice: { black: 1, white: 1 },
      },
    ],
  },
  {
    ldf: 'imperialofficer',
    name: 'Imperial Officer',
    unique: false,
    side: 'dark',
    type: 'Trooper',
    points: 50,
    rank: 'Commander',
    minis: 1,
    wounds: 4,
    courage: 2,
    defense: 'white',
    surge: { attack: 'hit', defense: 'block' },
    speed: 2,
    slots: ['Command', 'Gear'],
    keywords: [
      {
        name: 'Spotter 1',
        description:
          'Choose 1 friendly unit at range 1. That unit gains an aim token.',
      },
      {
        name: 'Inspire 1',
        description:
          'After your Rally step, remove 1 suppression token from another friendly unit at range 1-2.',
      },
      {
        name: 'Sharpshooter 1',
        description:
          'While performing a ranged attack, reduce the defender’s cover by 1.',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: "Officer's RK-3 Blaster Pistol",
        range: { from: 1, to: 2 },
        dice: { black: 1, white: 1 },
      },
    ],
  },
  {
    ldf: 'jynerso',
    name: 'Jyn Erso',
    unique: true,
    side: 'light',
    type: 'Trooper',
    points: 110,
    rank: 'Commander',
    minis: 1,
    wounds: 6,
    courage: 3,
    defense: 'white',
    surge: { attack: 'crit', defense: 'block' },
    speed: 2,
    slots: ['Command', 'Gear', 'Elite', 'Armament'],
    keywords: [
      {
        name: 'Quick Thinking',
        description: 'Gain 1 aim token and 1 dodge token.',
      },
      {
        name: 'Danger Sense 4',
        description:
          'You may choose not to remove your suppression tokens. While defending against a ranged attack, roll 1 extra defense die for each suppression token you have, adding up to 4 extra dice.',
      },
      {
        name: 'Infiltrate',
        description:
          'You may deploy anywhere beyond range 3 of all enemy units.',
      },
    ],
    weapons: [
      {
        name: 'Collapsible Tonfa',
        range: { from: 0 },
        dice: { black: 4 },
        keywords: ['Suppressive'],
      },
    ],
    commandCards: ['rebellious', 'trustgoesbothways', 'completethemission'],
  },
  {
    ldf: 'directororsonkrennic',
    name: 'Director Orson Krennic',
    unique: true,
    side: 'light',
    type: 'Trooper',
    points: 90,
    rank: 'Commander',
    minis: 1,
    wounds: 6,
    courage: 2,
    defense: 'white',
    surge: { attack: 'crit', defense: 'block' },
    speed: 2,
    slots: ['Command', 'Command', 'Gear'],
    keywords: [
      {
        name: 'Compel',
        description:
          'After another friendly unit at range 1-2 rallies, if it is suppressed but not panicked, it may gain 1 suppression token to perform a free move action.',
      },
      {
        name: 'Cunning',
        description:
          'When your commander specific command cards are played, if there would be a bid for priority, treat your command card as though it had 1 fewer pip.',
      },
      {
        name: 'Entourage: Imperial Death Troopers',
        description:
          'While building an army, ignore the rank of 1 Imperial Death Troopers unit. During the Command Phase, you may issue an order to a friendly Imperial Death Troopers unit at range 1-2.',
      },
      {
        name: 'Sharpshooter 1',
        description:
          'While performing a ranged attack, reduce the defender’s cover by 1.',
      },
    ],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: "Krennic's DT-29 Blaster Pistol",
        range: { from: 1, to: 2 },
        dice: { white: 1, black: 1, red: 1 },
        keywords: ['Pierce 1'],
      },
    ],
    commandCards: [
      'voraciousambition',
      'deploythegarrison',
      'annihilationlooms',
    ],
  },
  {
    ldf: 'generalgrievous',
    name: 'General Grievous',
    unique: true,
    side: 'dark',
    rank: 'Commander',
    type: 'Trooper',
    points: 175,
    minis: 1,
    wounds: 8,
    courage: 2,
    speed: 2,
    defense: 'red',
    slots: ['Armament', 'Command', 'Command', 'Elite'],
    surge: {},
    keywords: [
      {
        name: 'Arsenal 2',
        description:
          'While attacking, each model on this unit can use up to 2 of its weapons',
      },
      {
        name: 'Block',
        description:
          'While defending, if you spend a dodge token, you gain "[Block Surge] : [Block]".',
      },
      {
        name: 'Impervious',
        description:
          'While defending, if the attack pool has Pierce X, roll x additional defense dice.',
      },
      {
        name: 'Jedi Hunter',
        description:
          'While attacking a unit that has a Force upgrade icon, you gain "[Surge] : [Crit]".',
      },
      {
        name: 'Relentless',
        description:
          'After you perform a move action, you may perform a free attack action.',
      },
      {
        name: 'Scale',
        description:
          'You gain Unhindered and Expert Climber. You may perform a free clamber maneuver before or after you move.',
      },
    ],
    weapons: [
      {
        name: 'Trophy Lightsabers',
        dice: { red: 1, black: 2, white: 1 },
        range: { from: 0, to: 0 },
        keywords: ['Impact 1', 'Pierce 1'],
      },
      {
        name: 'Trophy Lightsabers',
        dice: { red: 1, black: 2, white: 1 },
        range: { from: 0, to: 0 },
        keywords: ['Impact 1', 'Pierce 1'],
      },
    ],
    commandCards: ['trainedinyourjediarts', 'supremecommander', 'crushthem'],
  },
  {
    ldf: 'obiwankenobi',
    name: 'Obi-Wan Kenobi',
    unique: true,
    side: 'light',
    rank: 'Commander',
    type: 'Trooper',
    points: 175,
    minis: 1,
    wounds: 6,
    courage: 3,
    speed: 2,
    defense: 'red',
    slots: ['Command', 'Force', 'Force', 'Elite'],
    surge: {},
    keywords: [
      {
        name: 'Jump 1',
        description:
          'Perform a move during which you ignore terrain that is height 1 or lower. This is treated as a move action',
      },
      {
        name: 'Charge',
        description:
          'After you perform a move action, you may perform a free melee attack action.',
      },
      {
        name: 'Guardian 3',
        description:
          'When a friendly unit at range 1 is defending against a ranged attack, you may choose up to 3 [Hit] results. For each result chosen, roll a defense die as though you were the defender.',
      },
      {
        name: 'Immune: Pierce',
        description: 'Pierce cannot be used against you.',
      },
      {
        name: 'Master of the Force 1',
        description:
          'During the End Phase, you may ready 1 of your Force upgrade cards.',
      },
      {
        name: 'Soresu Mastery',
        description:
          'While defending or using Guardian, if you spend a dodge token, you gain "[Block Surge] : [Block]" and the attacker suffers 1 wound for each [Block Surge] rolled.',
      },
    ],
    weapons: [
      {
        name: "Obi-Wan's Lightsaber",
        dice: { red: 2, black: 2, white: 2 },
        range: { from: 0, to: 0 },
        keywords: ['Critical 2', 'Impact 2', 'Pierce 2'],
      },
    ],
    commandCards: ['hellothere', 'knowledgeanddefense', 'generalkenobi'],
  },
  {
    ldf: 'countdooku',
    name: 'Count Dooku',
    unique: true,
    side: 'dark',
    rank: 'Commander',
    type: 'Trooper',
    points: 205,
    minis: 1,
    wounds: 6,
    courage: 3,
    speed: 2,
    defense: 'red',
    slots: ['Command', 'Force', 'Force', 'Force'],
    surge: { attack: 'crit' },
    keywords: [
      {
        name: 'Cunning',
        description:
          'When your commander specific command cards are played, if there would be a bid for priority, treat your command card as though it had 1 fewer pip.',
      },
      {
        name: 'Deflect',
        description:
          'While defending, if you spend a dodge token, you gain “Surge: Block”: if it’s a ranged attack, the attacker suffers 1 wound for each Surge rolled.',
      },
      {
        name: 'Immune: Pierce',
        description: 'Pierce cannot be used against you.',
      },
      {
        name: 'Makashi Mastery',
        description:
          'While performing a melee attack, you may reduce the Pierce value of your melee weapon by 1. If you do, the defender cannot use Immune: Pierce.',
      },
      {
        name: 'Master of the Force 2',
        description:
          'During the End Phase, you may ready 2 of your Force upgrade cards.',
      },
    ],
    weapons: [
      {
        name: "Dooku's Lightsaber",
        dice: { red: 5 },
        range: { from: 0, to: 0 },
        keywords: ['Impact 2', 'Pierce 2'],
      },
      {
        name: "Dooku's Lightning",
        dice: { black: 5 },
        range: { from: 1, to: 2 },
        keywords: ['Scatter'],
      },
    ],
    commandCards: [
      'fearsurpriseintimidation',
      'doublethefall',
      'youdisappointme',
    ],
  },
  {
    ldf: 'clonecaptainrex',
    name: 'Clone Captain Rex',
    unique: true,
    side: 'light',
    rank: 'Commander',
    type: 'Trooper',
    points: 90,
    minis: 1,
    wounds: 5,
    courage: 2,
    speed: 2,
    defense: 'red',
    slots: ['Command', 'Gear', 'Gear', 'Grenades', 'Elite'],
    surge: { attack: 'crit' },
    keywords: [
      {
        name: 'Gunslinger',
        description:
          'After you perform a ranged attack action, you may perform an additional ranged attack against a different unit.',
      },
      {
        name: 'Scout 1',
        description: 'After you deploy, you may perform a speed 1 move.',
      },
      {
        name: 'Scouting Party 2',
        description:
          'After you use Scout, choose up to 2 friendly troopers at range 1-2. Each friendly unit may perform a move with a speed equal to your Scout value.',
      },
      {
        name: 'Sharpshooter 1',
        description:
          'While performing a ranged attack, reduce the defender’s cover by 1.',
      },
      {
        name: 'Tactical 1',
        description: 'After you perform a standard move, gain 1 aim token.',
      },
    ],
    weapons: [
      {
        name: 'Advanced Combat Training',
        dice: { red: 2 },
        range: { from: 0, to: 0 },
      },
      {
        name: 'Dual DC-17 Hand Blasters',
        dice: { red: 3 },
        range: { from: 1, to: 2 },
      },
    ],
    commandCards: [
      'youcancallmecaptain',
      'eatthisclankers',
      'werenotprogrammed',
    ],
  },
];

export default units;
