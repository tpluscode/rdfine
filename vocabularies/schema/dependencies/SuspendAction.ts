import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ControlActionMixin } from '../ControlAction';
import { SuspendActionMixin } from '../SuspendAction';

export const SuspendActionDependencies = [
  ControlActionMixin as Mixin,
  SuspendActionMixin as Mixin];
