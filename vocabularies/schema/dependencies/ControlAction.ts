import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { ControlActionMixin } from '../ControlAction';

export const ControlActionDependencies = [
  ActionMixin as Mixin,
  ControlActionMixin as Mixin];
