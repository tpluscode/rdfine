import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ControlActionMixin } from '../ControlAction';
import { SuspendActionMixin } from '../SuspendAction';

export const SuspendActionBundle = [
  ControlActionMixin as Mixin,
  SuspendActionMixin as Mixin];
