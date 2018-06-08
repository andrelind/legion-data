// @flow
import type { Side } from '../types';

export type ArmyLDF = {
  uid: string,
  name: string,
  points: number,
  side: Side,
  favourite: boolean,
  commander: UnitLDF[],
  operative: UnitLDF[],
  corps: UnitLDF[],
  special: UnitLDF[],
  support: UnitLDF[],
  heavy: UnitLDF[],
};

export type UnitLDF = {
  uid: string,
  ldf: string,
  upgrades: SlotsLDF,
};

export type SlotsLDF = {
  command?: UpgradeLDF[],
  comms?: UpgradeLDF[],
  elite?: UpgradeLDF[],
  force?: UpgradeLDF[],
  gear?: UpgradeLDF[],
  generator?: UpgradeLDF[],
  grenades?: UpgradeLDF[],
  hardpoint?: UpgradeLDF[],
  heavy?: UpgradeLDF[],
  personnel?: UpgradeLDF[],
  pilot?: UpgradeLDF[],
};

export type UpgradeLDF = {
  ldf: string,
};
