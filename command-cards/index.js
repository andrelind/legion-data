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
];
