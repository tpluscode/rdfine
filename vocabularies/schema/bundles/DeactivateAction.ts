import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ControlActionMixin } from '../ControlAction';
import { DeactivateActionMixin } from '../DeactivateAction';

export const DeactivateActionBundle = [
  ControlActionMixin as Mixin,
  DeactivateActionMixin as Mixin];
