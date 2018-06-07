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
      'While you are defending, each friendly corps trooper unit at range 1 gains Guardian 1 (When a friendly unit at range 1 is defending against a ranged attack, you may choose 1. For each result chosen, roll a defense die as though you were the defender.)',
  },
];

export default upgrades;
