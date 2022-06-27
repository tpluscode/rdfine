import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CheckActionMixin } from '../lib/CheckAction';
import { FindActionMixin } from '../lib/FindAction';

export const CheckActionBundle = [
  CheckActionMixin as Mixin,
  FindActionMixin as Mixin];
