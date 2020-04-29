import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../ConsumeAction';
import { DrinkActionMixin } from '../DrinkAction';

export const DrinkActionDependencies = [
  ConsumeActionMixin as Mixin,
  DrinkActionMixin as Mixin];
