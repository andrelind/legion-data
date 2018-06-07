// @flow
import type { Side } from './types';

export type ArmyLDF = {
  uid: string,
  name: string,
  points: number,
  side: Side,
  favourite: boolean,
  commander: UnitLDF[],
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
  heavy?: UpgradeLDF[],
  personnel?: UpgradeLDF[],
  force?: UpgradeLDF[],
  command?: UpgradeLDF[],
  hardpoint?: UpgradeLDF[],
  gear?: UpgradeLDF[],
  grenades?: UpgradeLDF[],
  comms?: UpgradeLDF[],
  pilot?: UpgradeLDF[],
};

export type UpgradeLDF = {
  ldf: string,
};
