import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ControlActionMixin } from '../ControlAction';
import { ActivateActionMixin } from '../ActivateAction';

export const ActivateActionBundle = [
  ControlActionMixin as Mixin,
  ActivateActionMixin as Mixin];
