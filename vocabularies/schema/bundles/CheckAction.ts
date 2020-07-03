import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FindActionMixin } from '../FindAction';
import { CheckActionMixin } from '../CheckAction';

export const CheckActionBundle = [
  FindActionMixin as Mixin,
  CheckActionMixin as Mixin];
