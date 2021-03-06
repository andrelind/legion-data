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
  {
    ldf: 'rebelofficer',
    name: 'Rebel Officer',
    side: 'light',
    slot: 'Personnel',
    points: 19,
    restrictions: { name: 'Rebel only', ldf: 'rebels' },
    description: 'Add 1 Rebel Officer mini.',
    keywords: [
      {
        name: 'Inspire 1',
        description:
          'After your Rally step, remove up to 1 suppression token from another friendly unit at range 1-2.',
      },
      {
        name: 'Leader',
        description: 'This mini is your unit leader.',
      },
    ],
  },
  {
    ldf: 'rebelcommstechnician',
    name: 'Rebel Comms Technician',
    side: 'light',
    slot: 'Personnel',
    points: 9,
    restrictions: { name: 'Rebel only', ldf: 'rebels' },
    description:
      'Add 1 Rebel comms technician mini. You gain a comms upgrade icon. You must equip a comms upgrade card.',
  },
  {
    ldf: 'r5astromechdroid',
    name: 'R5 Astromech Droid',
    side: 'light',
    slot: 'Personnel',
    points: 8,
    restrictions: { name: 'Rebel only', ldf: 'rebels' },
    description: 'Add 1 R5 astromech mini.',
    keywords: [
      {
        name: 'Repair 1: Capacity 2',
        description:
          'Place a wound token on this card to remove 1 wound, ion, or vehicle damage token from a friendly ground vehicle at range 1 and in line of sight. Limit 2 tokens.',
      },
      {
        name: 'Noncombatant',
        description:
          'The mini added by that upgrade cannot use any weapons and wounds must be assigned to other non-unit leader minis first.',
      },
    ],
  },
  {
    ldf: '21bmedicaldroid',
    name: '2-1B Medical Droid',
    side: 'light',
    slot: 'Personnel',
    points: 18,
    restrictions: { name: 'Rebel only', ldf: 'rebels' },
    description: 'Add 1 2-1B medical droid mini.',
    keywords: [
      {
        name: 'Treat 1: Capacity 2',
        description:
          'Place a wound token on this card to remove 1 wound token from or restore 1 mini to a friendly non-emplacement trooper unit at range 1 and in line of sight. Limit 2 tokens.',
      },
      {
        name: 'Noncombatant',
        description:
          'The mini added by that upgrade cannot use any weapons and wounds must be assigned to other non-unit leader minis first.',
      },
    ],
  },
  {
    ldf: 'imperialofficer',
    name: 'Imperial Officer',
    side: 'dark',
    slot: 'Personnel',
    points: 20,
    restrictions: { name: 'Imperial only', ldf: 'empire' },
    description: 'Add 1 Imperial Officer mini.',
    keywords: [
      {
        name: 'Inspire 1',
        description:
          'After your Rally step, remove up to 1 suppression token from another friendly unit at range 1-2.',
      },
      {
        name: 'Leader',
        description: 'This mini is your unit leader.',
      },
    ],
  },
  {
    ldf: 'imperialcommstechnician',
    name: 'Imperial Comms Technician',
    side: 'dark',
    slot: 'Personnel',
    points: 10,
    restrictions: { name: 'Imperial only', ldf: 'empire' },
    description:
      'Add 1 Imperial comms technician mini. You gain a comms upgrade icon. You must equip a comms upgrade card.',
  },
  {
    ldf: 'r4astromechdroid',
    name: 'R4 Astromech Droid',
    side: 'dark',
    slot: 'Personnel',
    points: 9,
    restrictions: { name: 'Imperial only', ldf: 'empire' },
    description: 'Add 1 R4 astromech mini.',
    keywords: [
      {
        name: 'Repair 1: Capacity 2',
        description:
          'Place a wound token on this card to remove 1 wound, ion, or vehicle damage token from a friendly ground vehicle at range 1 and in line of sight. Limit 2 tokens.',
      },
      {
        name: 'Noncombatant',
        description:
          'The mini added by that upgrade cannot use any weapons and wounds must be assigned to other non-unit leader minis first.',
      },
    ],
  },
  {
    ldf: 'fx9medicaldroid',
    name: 'FX-9 Medical Droid',
    side: 'dark',
    slot: 'Personnel',
    points: 19,
    restrictions: { name: 'Imperial only', ldf: 'empire' },
    description: 'Add 1 FX-9 medical droid mini.',
    keywords: [
      {
        name: 'Treat 1: Capacity 2',
        description:
          'Place a wound token on this card to remove 1 wound token from or restore 1 mini to a friendly non-emplacement trooper unit at range 1 and in line of sight. Limit 2 tokens.',
      },
      {
        name: 'Noncombatant',
        description:
          'The mini added by that upgrade cannot use any weapons and wounds must be assigned to other non-unit leader minis first.',
      },
    ],
  },
  {
    ldf: 'rebelveteran',
    name: 'Rebel Veteran',
    side: 'light',
    slot: 'Personnel',
    points: 12,
    restrictions: { name: 'Rebel Veterans only', ldf: 'rebelveterans' },
    description: 'Add 1 rebel veteran mini.',
  },
  {
    ldf: 'shoretrooper',
    name: 'Shoretrooper',
    side: 'dark',
    slot: 'Personnel',
    points: 13,
    restrictions: { name: 'Shoretroopers only', ldf: 'shoretroopers' },
    description: 'Add 1 Shoretrooper mini.',
  },
  {
    ldf: 'phaseiclonetrooper',
    name: 'Phase I Clone Trooper',
    side: 'light',
    slot: 'Personnel',
    points: 13,
    restrictions: {
      name: 'Phase I Clone Troopers only',
      ldf: 'phaseiclonetroopers',
    },
    description: 'Add 1 Phase I Clone trooper mini.',
  },
  {
    ldf: 'b1battledroid',
    name: 'B1 Battle Droid',
    side: 'dark',
    slot: 'Personnel',
    points: 6,
    restrictions: {
      name: 'B1 Battle Droids only',
      ldf: 'b1battledroids',
    },
    description: 'Add 1 B1 Battle Droid mini.',
  },
];

export default upgrades;
