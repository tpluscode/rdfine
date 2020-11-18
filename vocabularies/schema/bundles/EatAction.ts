import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../lib/ConsumeAction';
import { EatActionMixin } from '../lib/EatAction';

export const EatActionBundle = [
  ConsumeActionMixin as Mixin,
  EatActionMixin as Mixin];
