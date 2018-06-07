// @flow

export type AttackDice = {
  white?: number,
  black?: number,
  red?: number,
};

export type DefenceDice = 'white' | 'red';

export type Keyword = {
  name: string,
  description: string,
};

export type Rank =
  | 'Commander'
  | 'Corps'
  | 'Special Forces'
  | 'Support'
  | 'Heavy';

export type Side = 'light' | 'dark' | 'neutral';

export type Slot =
  | 'Heavy Weapon'
  | 'Personnel'
  | 'Force'
  | 'Command'
  | 'Hardpoint'
  | 'Gear'
  | 'Grenades'
  | 'Comms'
  | 'Pilot'
  | 'Elite';

export type Squadron = {
  uid: string,
  name: string,
  points: number,
  side: Side,
  favourite: boolean,
  version?: string,
  commander: Unit[],
  corps: Unit[],
  special: Unit[],
  support: Unit[],
  heavy: Unit[],
};

export type Surge = { attack?: 'hit' | 'crit', defense?: 'block' };

export type Unit = {
  uid?: string,
  ldf: string,
  unique?: boolean,
  name: string,
  subtitle?: string,
  side: Side,
  type: UnitType,
  points: number,
  pointsWithUpgrades?: number,
  rank: Rank,
  minis: number,
  wounds: number,
  courage?: number,
  resilience?: number,
  defense: DefenceDice,
  surge: Surge,
  speed: number,
  slots: Slot[],
  keywords: Keyword[],
  weapons: Weapon[],
  upgrades?: Upgrades,
};

export type UnitType = 'Trooper' | 'Vehicle';

export type Upgrade = {
  ldf: string,
  name: string,
  unique?: boolean,
  description?: string,
  side: Side,
  exhaust?: boolean,
  restrictions?: { name: string, ldf: string },
  slot: Slot,
  points: number,
  keywords?: Keyword[],
  weapon?: Weapon,
};

export type Upgrades = {
  heavy?: Upgrade[],
  personnel?: Upgrade[],
  force?: Upgrade[],
  command?: Upgrade[],
  hardpoint?: Upgrade[],
  gear?: Upgrade[],
  grenades?: Upgrade[],
  comms?: Upgrade[],
  pilot?: Upgrade[],
};

export type Weapon = {
  name?: string,
  range: { from: number, to?: number },
  dice: AttackDice,
  keywords?: string[],
};
