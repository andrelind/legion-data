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
  | 'Operative'
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
  | 'Elite'
  | 'Generator';

export type Army = {
  uid: string,
  name: string,
  points: number,
  side: Side,
  favourite: boolean,
  version?: string,
  commander: Unit[],
  operative: Unit[],
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
  commandCards?: CommandCard[],
};

export type UnitType = 'Trooper' | 'Emplacement Trooper' | 'Vehicle';

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
  command?: Upgrade[],
  comms?: Upgrade[],
  elite?: Upgrade[],
  force?: Upgrade[],
  gear?: Upgrade[],
  generator?: Upgrade[],
  grenades?: Upgrade[],
  hardpoint?: Upgrade[],
  heavy?: Upgrade[],
  personnel?: Upgrade[],
  pilot?: Upgrade[],
};

export type Weapon = {
  name?: string,
  range: { from: number, to?: number },
  dice: AttackDice,
  keywords?: string[],
};

export type CommandCard = {
  ldf: string,
  name: string,
  pips: number,
  orders: string,
  description?: string,
  weapon?: Weapon,
};
