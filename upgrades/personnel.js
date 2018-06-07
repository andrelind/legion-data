// @flow
import type { Upgrade } from '../types';

const upgrades: Upgrade[] = [
  {
    ldf: 'rebeltrooper',
    name: 'Rebel Trooper',
    side: 'light',
    slot: 'Personnel',
    points: 10,
    restrictions: { name: 'Rebel Troopers only', ldf: 'rebeltroopers' },
    description: 'Add 1 Rebel Trooper mini',
  },
  {
    ldf: 'stormtrooper',
    name: 'Stormtrooper',
    side: 'dark',
    slot: 'Personnel',
    points: 11,
    restrictions: { name: 'Stormtroopers only', ldf: 'stormtroopers' },
    description: 'Add 1 Stormtrooper mini.',
  },
  {
    ldf: 'snowtrooper',
    name: 'Snowtrooper',
    side: 'dark',
    slot: 'Personnel',
    points: 12,
    restrictions: { name: 'Snowtroopers only', ldf: 'snowtroopers' },
    description: 'Add 1 Snowtrooper mini.',
  },
  {
    ldf: 'fleettrooper',
    name: 'Fleet Trooper',
    side: 'light',
    slot: 'Personnel',
    points: 11,
    restrictions: { name: 'Fleet Troopers only', ldf: 'fleettroopers' },
    description: 'Add 1 Fleet Trooper mini.',
  },
];

export default upgrades;
