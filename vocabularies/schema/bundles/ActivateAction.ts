import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ControlActionMixin } from '../lib/ControlAction';
import { ActivateActionMixin } from '../lib/ActivateAction';

export const ActivateActionBundle = [
  ControlActionMixin as Mixin,
  ActivateActionMixin as Mixin];
