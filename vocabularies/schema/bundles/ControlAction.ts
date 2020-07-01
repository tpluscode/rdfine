import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { ControlActionMixin } from '../ControlAction';

export const ControlActionBundle = [
  ActionMixin as Mixin,
  ControlActionMixin as Mixin];
