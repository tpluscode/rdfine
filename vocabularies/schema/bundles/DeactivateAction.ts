import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ControlActionMixin } from '../lib/ControlAction';
import { DeactivateActionMixin } from '../lib/DeactivateAction';

export const DeactivateActionBundle = [
  ControlActionMixin as Mixin,
  DeactivateActionMixin as Mixin];
