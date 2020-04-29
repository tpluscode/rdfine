import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../ConsumeAction';
import { EatActionMixin } from '../EatAction';

export const EatActionDependencies = [
  ConsumeActionMixin as Mixin,
  EatActionMixin as Mixin];
