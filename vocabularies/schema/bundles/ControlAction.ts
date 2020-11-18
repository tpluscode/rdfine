import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { ControlActionMixin } from '../lib/ControlAction';

export const ControlActionBundle = [
  ActionMixin as Mixin,
  ControlActionMixin as Mixin];
