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
      '[action] Until the end of your activation, you gain <strong>ARSENAL 2</strong> (While attacking, each of your minis can use up to 2 of its weapons.)',
  },
  {
    ldf: 'wedgeantilles',
    name: 'Wedge Antilles',
    side: 'light',
    slot: 'Pilot',
    points: 5,
    exhaust: true,
    description:
      '[action] Until the end of your activation, you gain <strong>FULL PIVOT</strong> (When you pivot, you can pivot up to 360 degrees.',
  },
  {
    ldf: 'firstsergeantarbmab',
    name: 'First Sergeant Arbmab',
    side: 'dark',
    slot: 'Pilot',
    points: 5,
    unique: true,
    description:
      'Imperial only.\nGround Vehicle only.\n\nYou gain Tactical 1 (After you perform a standard move, gain 1 aim token.)',
  },
  {
    ldf: 'imperialhammerselitearmorpilot',
    name: 'Imperial Hammers Elite Armor Pilot',
    side: 'dark',
    slot: 'Pilot',
    points: 10,
    description:
      'Imperial only.\nGround Vehicle only.\n\nYou gain "[Surge Attack]: [Hit]"',
  },
  {
    ldf: 'ryderazadi',
    name: 'Ryder Azadi',
    side: 'light',
    exhaust: true,
    slot: 'Pilot',
    points: 5,
    unique: true,
    description:
      'Rebel only.\nRepulsor Vehicle only.\n\nWhile performing a move, increase or decrease your maximum speed by 1.',
  },
  {
    ldf: 'outerrimspeederjockey',
    name: 'Outer Rim Speeder Jockey',
    side: 'light',
    slot: 'Pilot',
    points: 10,
    description:
      'Rebel only.\nRepulsor Vehicle only.\n\nYou gain Cover 1 (While defending against a ranged attack, improve your cover by 1.)',
  },
];

export default upgrades;
