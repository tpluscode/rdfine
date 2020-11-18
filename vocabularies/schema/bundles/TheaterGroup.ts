import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PerformingGroupMixin } from '../lib/PerformingGroup';
import { TheaterGroupMixin } from '../lib/TheaterGroup';

export const TheaterGroupBundle = [
  PerformingGroupMixin as Mixin,
  TheaterGroupMixin as Mixin];
