import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../lib/ConsumeAction';
import { DrinkActionMixin } from '../lib/DrinkAction';

export const DrinkActionBundle = [
  ConsumeActionMixin as Mixin,
  DrinkActionMixin as Mixin];
