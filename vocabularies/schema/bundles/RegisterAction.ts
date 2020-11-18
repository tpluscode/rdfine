import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../lib/InteractAction';
import { RegisterActionMixin } from '../lib/RegisterAction';

export const RegisterActionBundle = [
  InteractActionMixin as Mixin,
  RegisterActionMixin as Mixin];
