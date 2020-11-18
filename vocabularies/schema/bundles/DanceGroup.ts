import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PerformingGroupMixin } from '../lib/PerformingGroup';
import { DanceGroupMixin } from '../lib/DanceGroup';

export const DanceGroupBundle = [
  PerformingGroupMixin as Mixin,
  DanceGroupMixin as Mixin];
