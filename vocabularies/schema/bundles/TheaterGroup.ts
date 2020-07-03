import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PerformingGroupMixin } from '../PerformingGroup';
import { TheaterGroupMixin } from '../TheaterGroup';

export const TheaterGroupBundle = [
  PerformingGroupMixin as Mixin,
  TheaterGroupMixin as Mixin];
