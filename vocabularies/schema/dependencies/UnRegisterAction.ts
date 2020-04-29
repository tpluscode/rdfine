import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../InteractAction';
import { UnRegisterActionMixin } from '../UnRegisterAction';

export const UnRegisterActionDependencies = [
  InteractActionMixin as Mixin,
  UnRegisterActionMixin as Mixin];
