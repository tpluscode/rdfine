import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PerformingGroupMixin } from '../PerformingGroup';
import { TheaterGroupMixin } from '../TheaterGroup';

export const TheaterGroupDependencies = [
  PerformingGroupMixin as Mixin,
  TheaterGroupMixin as Mixin];
