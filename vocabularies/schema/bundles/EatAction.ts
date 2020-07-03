import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../ConsumeAction';
import { EatActionMixin } from '../EatAction';

export const EatActionBundle = [
  ConsumeActionMixin as Mixin,
  EatActionMixin as Mixin];
