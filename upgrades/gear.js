// @flow
import type { Upgrade } from '../types';

const upgrades: Upgrade[] = [
  {
    ldf: 'grapplinghooks',
    name: 'Grappling Hooks',
    side: 'neutral',
    slot: 'Gear',
    points: 3,
    keywords: [
      {
        name: 'You gain <strong>EXPERT CLIMBER</strong>',
        description:
          'While clambering, do not roll defense dice or suffer wounds.',
      },
    ],
  },
  {
    ldf: 'targetingscopes',
    name: 'Targeting Scopes',
    side: 'neutral',
    slot: 'Gear',
    points: 6,
    keywords: [
      {
        name: 'You gain <strong>PRECISE 1</strong>',
        description:
          'When you spend an aim token, reroll up to 1 additional die.',
      },
    ],
  },
  {
    ldf: 'environmentalgear',
    name: 'Environmental Gear',
    side: 'neutral',
    slot: 'Gear',
    points: 3,
    keywords: [
      {
        name: 'You gain <strong>UNHINDERED</strong>',
        description: 'You ignore the effects of difficult terrain.',
      },
    ],
  },
  {
    ldf: 'emergencystims',
    name: 'Emergency Stims',
    side: 'neutral',
    slot: 'Gear',
    points: 8,
    exhaust: true,
    keywords: [
      {
        name: '-',
        description:
          'During an attack, when you would suffer wounds, prevent up to 2 wounds and place an equal number of wound tokens on this card instead. If you do, at the end of your activation, discard each token on this card and suffer wounds equal to the number of tokens discarded.',
      },
    ],
  },
  {
    ldf: 'reconintel',
    name: 'Recon Intel',
    side: 'neutral',
    slot: 'Gear',
    points: 2,
    exhaust: false,
    keywords: [
      {
        name: 'You gain <strong>Scout 1</strong>',
        description: 'After you deploy, you may perform a speed-1 move.',
      },
    ],
  },
  {
    ldf: 'electrograpplingline',
    name: 'Electro Grappling Line',
    side: 'light',
    slot: 'Gear',
    points: 5,
    exhaust: true,
    description:
      '[Action] Choose an enemy trooper unit at range 1 and in line of sight. It gains 2 immobilize tokens and 2 suppression tokens.',
    restrictions: {
      name: 'Sabine Wren only',
      ldf: 'sabinewren',
    },
  },
  {
    ldf: 'personalcombatshield',
    name: 'Personal Combat Shield',
    side: 'light',
    slot: 'Gear',
    points: 10,
    description:
      'You gain Shielded 1 (You have 1 shield token.) and Recharge 1 (When you recover flip 1 inactive shield token.)',
    restrictions: {
      name: 'Sabine Wren only',
      ldf: 'sabinewren',
    },
  },
];

export default upgrades;
