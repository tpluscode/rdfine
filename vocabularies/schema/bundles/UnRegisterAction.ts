import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../lib/InteractAction';
import { UnRegisterActionMixin } from '../lib/UnRegisterAction';

export const UnRegisterActionBundle = [
  InteractActionMixin as Mixin,
  UnRegisterActionMixin as Mixin];
