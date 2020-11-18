import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FindActionMixin } from '../lib/FindAction';
import { CheckActionMixin } from '../lib/CheckAction';

export const CheckActionBundle = [
  FindActionMixin as Mixin,
  CheckActionMixin as Mixin];
