import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../ConsumeAction';
import { DrinkActionMixin } from '../DrinkAction';

export const DrinkActionBundle = [
  ConsumeActionMixin as Mixin,
  DrinkActionMixin as Mixin];
