import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DanceGroupMixin } from '../lib/DanceGroup';
import { PerformingGroupMixin } from '../lib/PerformingGroup';

export const DanceGroupBundle = [
  DanceGroupMixin as Mixin,
  PerformingGroupMixin as Mixin];
