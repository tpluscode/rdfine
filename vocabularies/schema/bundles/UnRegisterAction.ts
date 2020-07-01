import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../InteractAction';
import { UnRegisterActionMixin } from '../UnRegisterAction';

export const UnRegisterActionBundle = [
  InteractActionMixin as Mixin,
  UnRegisterActionMixin as Mixin];
