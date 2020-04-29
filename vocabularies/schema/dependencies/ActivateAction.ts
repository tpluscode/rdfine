import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ControlActionMixin } from '../ControlAction';
import { ActivateActionMixin } from '../ActivateAction';

export const ActivateActionDependencies = [
  ControlActionMixin as Mixin,
  ActivateActionMixin as Mixin];
