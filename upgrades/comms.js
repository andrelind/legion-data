// @flow
import type { Upgrade } from '../types';

const upgrades: Upgrade[] = [
  {
    ldf: 'commsjammer',
    name: 'Comms Jammer',
    description:
      'Enemy units at range 1 cannot be issued orders, unless they are issuing an order to themselves.',
    side: 'neutral',
    slot: 'Comms',
    points: 15,
  },
  {
    ldf: 'longrangecomlink',
    name: 'Long-Range Comlink',
    side: 'neutral',
    slot: 'Comms',
    points: 10,
    description:
      'During the Command Phase, you may be issued orders as though you are in range of the nominated commander.',
  },
];

export default upgrades;
