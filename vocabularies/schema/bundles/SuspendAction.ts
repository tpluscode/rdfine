import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ControlActionMixin } from '../lib/ControlAction';
import { SuspendActionMixin } from '../lib/SuspendAction';

export const SuspendActionBundle = [
  ControlActionMixin as Mixin,
  SuspendActionMixin as Mixin];
