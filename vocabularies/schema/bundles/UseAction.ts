import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../lib/ConsumeAction';
import { UseActionMixin } from '../lib/UseAction';

export const UseActionBundle = [
  ConsumeActionMixin as Mixin,
  UseActionMixin as Mixin];
