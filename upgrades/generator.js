// @flow
import type { Upgrade } from '../types';

const upgrades: Upgrade[] = [
  {
    ldf: 'barragegenerator',
    name: 'Barrage Generator',
    side: 'neutral',
    slot: 'Generator',
    points: 7,
    exhaust: true,
    description:
      'While performing a ranged attack with a weapon that has <strong>FIXED</strong>, add 2 white attack dice and apply <strong>SUPPRESSIVE</strong> to your attack pool.',
  },
  {
    ldf: 'overchargedgenerator',
    name: 'Overcharged Generator',
    side: 'neutral',
    slot: 'Generator',
    points: 7,
    exhaust: true,
    description:
      'While performing a ranged attack with a weapon that has <strong>FIXED</strong>, add 1 black attack die and apply <strong>IMPACT 1</strong> to your attack pool.',
  },
];

export default upgrades;
