// @flow
import type { CommandCard } from '../types';

const cards: CommandCard[] = [
  {
    ldf: 'ambush',
    name: 'Ambush',
    pips: 1,
    orders: '1 Unit',
  },
  {
    ldf: 'push',
    name: 'Push',
    pips: 2,
    orders: '2 Units',
  },
  {
    ldf: 'assault',
    name: 'Assault',
    pips: 3,
    orders: '3 Units',
  },
  {
    ldf: 'standingorders',
    name: 'Standing Orders',
    pips: 4,
    orders: '1 Unit',
    description:
      'At the end of the Command Phase, return this card to your hand.',
  },
  {
    ldf: 'sonofskywalker',
    name: 'Son of Skywalker',
    pips: 1,
    orders: 'Luke Skywalker',
    description:
      'When Luke performs his first attack he may make an additional attack.',
  },
  {
    ldf: 'myallyistheforce',
    name: 'My Ally is the Force',
    pips: 2,
    orders: '2 Troopers',
    description:
      'When a friendly trooper unit is activated it gains a dodge token.',
  },
  {
    ldf: 'returnofthejedi',
    name: 'Return of the Jedi',
    pips: 3,
    orders: '2 Units and Luke Skywalker',
    description:
      'When Luke Skywalker is issued an order, he gains 1 dodge token. When Luke Skywalker activates, each friendly trooper at range 1-3 of him may remove 1 suppression token.',
  },
  {
    ldf: 'implacable',
    name: 'Implacable',
    pips: 1,
    orders: 'Darth Vader',
    description:
      "At the end of Darth Vader's first activation, he may suffer 1 wound to shuffle his order token into the order pool. During Darth Vader's second activation, he performs 1 fewer action.",
  },
  {
    ldf: 'newwaystomotivatethem',
    name: 'New Ways to Motivate Them',
    pips: 2,
    orders: '2 Troopers',
    description:
      'When a friendly non-Darth Vader trooper unit with a faceup order token activates, it may suffer 1 wound to perform 1 free action.',
  },
  {
    ldf: 'masterofevil',
    name: 'Master of Evil',
    pips: 3,
    orders: '2 Units and Darth Vader',
    description:
      'When Darth Vader is issued an order, he gains 1 dodge token. When Darth Vader activates, each enemy trooper at range 1-2 of him gains 3 suppression tokens.',
  },
  {
    ldf: 'maximumfirepower',
    name: 'Maximum Firepower',
    pips: 1,
    orders: 'General Veers',
    description:
      'At the end of General Veers´ activation, he may perform an attack using the following weapon:',
    weapon: {
      range: { from: 4 },
      dice: { red: 4 },
      keywords: ['Impact 2', 'Immune: Deflect'],
    },
  },
  {
    ldf: 'evasivemaneuvers',
    name: 'Evasive Maneuvers',
    pips: 2,
    orders: '2 Vehicles',
    description:
      'When a friendly vehicle unit is issued an order it gains 1 dodge token. Friendly vehicle units can spend dodge tokens to cancel critical hit results.',
  },
  {
    ldf: 'imperialdiscipline',
    name: 'Imperial Discipline',
    pips: 3,
    orders: 'General Veers and 2 units',
    description: 'When a friendly unit is issued an order it may recover.',
  },
  {
    ldf: 'coordinatedbombardment',
    name: 'Coordinated Bombardment',
    pips: 1,
    orders: 'Leia Organa',
    description:
      "At the end of Leia Organa's activation, you may perform up to 3 attacks against different enemy units using the following weapon:",
    weapon: {
      range: { from: 4 },
      dice: { red: 2 },
      keywords: ['Immune: Deflect'],
    },
  },
  {
    ldf: 'notimeforsorrows',
    name: 'No Time for Sorrows',
    pips: 2,
    orders: '2 Troopers',
    description:
      'When a friendly Trooper unit is issued an order, it may perform a speed-1 move.',
  },
  {
    ldf: 'somebodyhastosaveourskins',
    name: 'Somebody Has to Save Our Skins',
    pips: 3,
    orders: 'Leia Organa and 2 Units',
    description:
      "After Leia Organa's activation, you may choose a friendly unit at range 1-2 with a faceup order token and activate it.",
  },
  {
    ldf: 'sorryaboutthemess',
    name: 'Sorry About the Mess',
    pips: 0,
    orders: 'Han Solo',
    description:
      'While building a command hand, treat this card as though it has 1 pip. When Han Solo is issued an order, he gains 1 aim token and 1 dodge token.',
  },
  {
    ldf: 'recklessdiversion',
    name: 'Reckless Diversion',
    pips: 2,
    orders: 'Han Solo and 1 Trooper',
    description:
      'When an enemy unit performs an attack, it must attack a trooper unit that has a faceup order token, if available.',
  },
  {
    ldf: 'changeofplans',
    name: 'Change of Plans',
    pips: 3,
    orders: 'Han Solo and 2 Units',
    description:
      'When this card is revealed, you may discard it to return an opponents command card to their hand. If you do, return to the Select Command Card step. That opponent cannot select the command card that was returned to their hand.',
  },
  {
    ldf: 'andnowyouwilldie',
    name: 'And Now... You Will Die',
    pips: 1,
    orders: 'Emperor Palpatine',
    description:
      "During Emperor Palpatine's activation, he may suffer 1 wound and gain 1 suppression token to perform an attack. He may do this any number of times. After Emperor Palpatine performs an attack, the defender gains 1 immobilized token.",
  },
  {
    ldf: 'giveintoyouranger',
    name: 'Give in to Your Anger',
    pips: 2,
    orders: 'Emperor Palpatine',
    description:
      "Before an opponent would activate their first unit, you may choose an enemy trooper unit. If you do, your opponent must activate that unit instead. Assign it an order token from its order pool unless it has a faceup order token. At the end of that unit's activation, if it did not perform an attack, it gains 4 suppression tokens.",
  },
  {
    ldf: 'anentirelegion',
    name: 'An Entire Legion',
    pips: 3,
    orders: 'Each eligible Unit',
  },
  {
    ldf: 'whipcordlauncher',
    name: 'Whipcord Launcher',
    pips: 1,
    orders: 'Boba Fett',
    description:
      "Boba Fett can perform moves while engaged with a unit that has 1 or more immobilized tokens. During Boba Fett's activation he gains: [card action] Choose an enemy trooper unit at range 1 and in line of sight. It gains 2 immobilized tokens and 2 suppression tokens.",
  },
  {
    ldf: 'zxflameprojector',
    name: 'ZX Flame Projector',
    pips: 2,
    orders: 'Boba Fett',
    description:
      "During Boba Fett's activation he gains the following weapons:",
    weapon: {
      range: { from: 0, to: 1 },
      dice: { red: 1 },
      keywords: ['Blast', 'Spray'],
    },
  },
  {
    ldf: 'z6jetpackrocket',
    name: 'Z-6 Jetpack Rocket',
    pips: 3,
    orders: 'Boba Fett',
    description:
      "During Boba Fett's activation he gains the following weapons:",
    weapon: {
      range: { from: 3, to: 4 },
      dice: { red: 3 },
      keywords: ['Blast', 'Impact 2'],
    },
  },
  {
    ldf: 'commoncause',
    name: 'Common Cause',
    pips: 1,
    orders: 'Chewbacca & Luke Skywalker',
    description:
      'After Chewbacca activates, if Luke Skywalker has a faceup order token, he may activate. After Luke Skywalker activates, if Chewbacca has a faceup order token, he may activate.',
  },
  {
    ldf: 'brainsandbrawn',
    name: 'Brains and Brawn',
    pips: 2,
    orders: 'Chewbacca & Leia Organa',
    description:
      'While Leia Organa is performing a ranged attack, if Chewbacca is not engaged and has line of sight to and is at range 1-3 of the defender, add one of his ranged weapons to the attack pool.',
  },
  {
    ldf: 'notoriousscoundrels',
    name: 'Notorious Scoundrels',
    pips: 3,
    orders: 'Chewbacca & Han Solo',
    description:
      "Choose one of Han Solo's command cards in your discard pile. Return that card to your hand.",
  },
  {
    ldf: 'sabotagedcommunications',
    name: 'Sabotaged Communications',
    pips: 1,
    orders: '1 Special Forces or Operative Unit',
    restrictions: { name: 'Rebel only', ldf: 'rebels' },
    description:
      'Your opponent must issue orders to 1 fewer unit than is indicated on their command card to a minimum of 1.',
  },
  {
    ldf: 'turningthetide',
    name: 'Turning the Tide',
    pips: 2,
    orders: '2 Support or Heavy Units',
    restrictions: { name: 'Rebel only', ldf: 'rebels' },
    description: 'Each friendly support or heavy unit gains Inspire 2.',
  },
  {
    ldf: 'coveringfire',
    name: 'Covering Fire',
    pips: 3,
    orders: '3 Corps Units',
    restrictions: { name: 'Rebel only', ldf: 'rebels' },
    description:
      'After a friendly corps unit performs a ranged attack, another friendly unit at range 1-2 may gain 1 dodge token.',
  },
  {
    ldf: 'covertobservation',
    name: 'Covert Observation',
    pips: 1,
    orders: '1 Special Forces or Operative Unit',
    restrictions: { name: 'Imperial only', ldf: 'empire' },
    description:
      "Look at up to 2 random command cards from an opponent's hand.",
  },
  {
    ldf: 'coordinatedfire',
    name: 'Coordinated Fire',
    pips: 3,
    orders: '3 Corps Units',
    restrictions: { name: 'Imperial only', ldf: 'empire' },
    description:
      'After a friendly corps unit spends an aim token, another friendly unit at range 1-2 may gain 1 aim token.',
  },
  {
    ldf: 'rebellious',
    name: 'Rebellious',
    pips: 1,
    orders: 'Jyn Erso',
    description:
      'Jyn Erso gains <strong>Charge</strong>. Once per round, when an enemy unit at range 1-2 and in line of sight of Jyn Erso activates, before it performs its Rally step, Jyn Erso may gain 1 suppression token to either perform an attack against that unit or to perform a free move action.',
  },
  {
    ldf: 'trustgoesbothways',
    name: 'Trust Goes Both Ways',
    pips: 2,
    orders: 'Jyn Erso & 1 Trooper',
    description:
      'Jyn Erso gains <strong>Inspire 2</strong>. When Jyn Erso issues an order to another friendly trooper unit, that unit gains <strong>Teamwork: Jyn Erso</strong>.',
  },
  {
    ldf: 'completethemission',
    name: 'Complete the Mission',
    pips: 3,
    orders: '3 Troopers',
    description:
      "Jyn Erso gains <strong>Low Profile</strong>. When a friendly trooper unit is issued an order, it may gain 1 suppression token. When a friendly trooper unit with a faceup order token activates, during its activation, it cannot become panicked or suppressed. At the end of that unit's activation, it may remove 1 suppression token.",
  },
  {
    ldf: 'voraciousambition',
    name: 'Voracious Ambition',
    pips: 1,
    orders: 'Director Orson Krennic',
    description:
      'At the start of the Activation Phase place 3 random order tokens from your order pool face down on this card. You may look at these order tokens at any time. When you would draw an order token from your order pool, you may choose 1 order token on this card and use that order token instead.',
  },
  {
    ldf: 'deploythegarrison',
    name: 'Deploy the Garrison',
    pips: 2,
    orders: '2 Troopers',
    description:
      'At the start of the Activation Phase, choose up to 2 friendly trooper units that have faceup order tokens. Each chosen unit may perform a free standby action.',
  },
  {
    ldf: 'annihilationlooms',
    name: 'Annihilation Looms',
    pips: 3,
    orders: 'Director Orson Krennic & 2 Units',
    description:
      'Each trooper unit gains 1 suppression token. If it is round 5 or 6, each trooper unit gains 1 additional suppression token.',
  },
  {
    ldf: 'explosions',
    name: 'Explosions!',
    pips: 1,
    orders: 'Sabine Wren',
    description:
      'During the round this card is played Sabine Wren gains →Arm 2: Thermal Charge. After she performs this action, she may perform a speed-1 move. Until the end of the game Sabine Wren gains Detonate 2: Thermal Charge. Do not discard this card from play.',
    weapon: {
      range: { from: 1, to: 1 },
      dice: { red: 1, white: 1 },
      surge: { attack: 'crit' },
      keywords: ['Blast'],
    },
  },
  {
    ldf: 'symbolofrebellion',
    name: 'Symbol of Rebellion',
    pips: 2,
    orders: 'Sabine Wren',
    description:
      "When Sabine Wren activates she recovers. During Sabine Wren's activation, you may place 1 grafiti token at range 1 and in line of sight of her, touching a piece of non-area terrain.",
  },
  {
    ldf: 'legacyofmandalore',
    name: 'Legacy of Mandalore',
    pips: 3,
    orders: 'Sabine Wren & 2 Troopers',
    description:
      'Sabine Wren gains Inspire 1. When Sabine Wren issues an order to a Commander, Operative, or Special Forces unit, she gains either 1 aim token or 1 dodge token.',
  },
  {
    ldf: 'mercilessmunitions',
    name: 'Merciless Munitions',
    pips: 1,
    orders: 'Bossk',
    description:
      'During the round this card is played Bossk gains →Arm 1: Dioxis Charge. After he performs this action, he may perform a speed-1 move. Until the end of the game Bossk gains Detonate 1: Dioxis Charge.\n\nAfter a trooper unit defends against an attack made by your dioxis charge, it gains 1 poison token.Do not discard this card from play.',
    weapon: {
      range: { from: 1, to: 1 },
      surge: { attack: 'crit' },
      dice: { red: 1, black: 1 },
      keywords: ['Blast'],
    },
  },
  {
    ldf: 'reptillianrampage',
    name: 'Reptillian Rampage',
    pips: 2,
    orders: 'Bossk',
    description:
      "During Bossk's activation he can perform up to 2 attack actions and he may suffer 1 wound to perform a free move action.",
  },
  {
    ldf: 'lyinginwait',
    name: 'Lying in Wait',
    pips: 3,
    orders: 'Bossk',
    description:
      'Bossk gains Sharpshooter 1. After an enemy unit activates, Bossk gains 1 aim token.',
  },
];

export default cards;
