import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../InteractAction';
import { RegisterActionMixin } from '../RegisterAction';

export const RegisterActionBundle = [
  InteractActionMixin as Mixin,
  RegisterActionMixin as Mixin];
