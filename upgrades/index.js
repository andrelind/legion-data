// @flow

import type { Slot, Upgrade } from '../types';

import Command from './command';
import Comms from './comms';
import Force from './force';
import Gear from './gear';
import Grenades from './grenades';
import Hardpoint from './hardpoint';
import Heavy from './heavy';
import Personnel from './personnel';
import Pilot from './pilot';
import Elite from './elite';

export default {
  Command,
  Comms,
  Force,
  Gear,
  Grenades,
  Hardpoint,
  'Heavy Weapon': Heavy,
  Personnel,
  Pilot,
  Elite,
};
