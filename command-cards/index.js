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
];
