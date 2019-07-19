// @flow
import type { Upgrade } from '../types';

const upgrades: Upgrade[] = [
  {
    ldf: 'commandingpresence',
    name: 'Commanding Presence',
    side: 'neutral',
    slot: 'Command',
    points: 10,
    description: 'When issuing orders, you can issue orders at range 4.',
  },
  {
    ldf: 'esteemedleader',
    name: 'Esteemed Leader',
    side: 'neutral',
    slot: 'Command',
    points: 5,
    description:
      'While you are defending, each friendly corps trooper unit at range 1 gains <strong>GUARDIAN 1</strong> (When a friendly unit at range 1 is defending against a ranged attack, you may choose 1 [hit] result. For each result chosen, roll a defense die as though you were the defender.)',
  },
  {
    ldf: 'improvisedorders',
    name: 'Improvised Orders',
    side: 'neutral',
    slot: 'Command',
    points: 10,
    exhaust: true,
    description:
      'After an order token is drawn from your order pool, you may draw a second order token, choose 1 to use and shuffle the other back into your order pool. During the End Phase, ready this card, if able.',
  },
  {
    ldf: 'strictorders',
    name: 'Strict Orders',
    side: 'neutral',
    slot: 'Command',
    points: 5,
    description:
      'When a friendly trooper unit with a faceup order token activates, during its Rally step, it may remove 1 suppression token instead of rolling dice.',
  },
];

export default upgrades;
