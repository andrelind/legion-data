// @flow
import type { Upgrade } from '../types';

const upgrades: Upgrade[] = [
  {
    ldf: 'generalweiss',
    name: 'General Weiss',
    side: 'dark',
    slot: 'Pilot',
    points: 10,
    exhaust: true,
    description:
      '[action]Until the end of your activation, you gain <strong>Arsenal 2</strong> (While attacking, each of your minis can use up to 2 of its weapons.)',
  },
  {
    ldf: 'wedgeantilles',
    name: 'Wedge Antilles',
    side: 'light',
    slot: 'Pilot',
    points: 5,
    exhaust: true,
    description:
      '[action] Until the end of your activation, you gain <strong>Full Pivot</strong> (When you pivot, you can pivot up to 360 degrees.',
  },
];

export default upgrades;
