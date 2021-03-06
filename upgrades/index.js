// @flow

import type { Slot, Upgrade } from '../types';

import Armament from './armament';
import Command from './command';
import Comms from './comms';
import Elite from './elite';
import Force from './force';
import Gear from './gear';
import Generator from './generator';
import Grenades from './grenades';
import Gunner from './gunner';
import Hardpoint from './hardpoint';
import Heavy from './heavy';
import Personnel from './personnel';
import Pilot from './pilot';

export default {
  Armament,
  Command,
  Comms,
  Elite,
  Force,
  Gear,
  Generator,
  Grenades,
  Gunner,
  Hardpoint,
  'Heavy Weapon': Heavy,
  Personnel,
  Pilot,
};
