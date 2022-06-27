import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivateActionMixin } from '../lib/ActivateAction';
import { ControlActionMixin } from '../lib/ControlAction';

export const ActivateActionBundle = [
  ActivateActionMixin as Mixin,
  ControlActionMixin as Mixin];
