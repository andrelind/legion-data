// @flow

import type { Slot, Upgrade } from '../types';

import Command from './command';
import Comms from './comms';
import Elite from './elite';
import Force from './force';
import Gear from './gear';
import Generator from './generator';
import Grenades from './grenades';
import Hardpoint from './hardpoint';
import Heavy from './heavy';
import Personnel from './personnel';
import Pilot from './pilot';

export default {
  Command,
  Comms,
  Elite,
  Force,
  Gear,
  Generator,
  Grenades,
  Hardpoint,
  'Heavy Weapon': Heavy,
  Personnel,
  Pilot,
};
