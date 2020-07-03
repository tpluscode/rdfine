import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PerformingGroupMixin } from '../PerformingGroup';
import { DanceGroupMixin } from '../DanceGroup';

export const DanceGroupBundle = [
  PerformingGroupMixin as Mixin,
  DanceGroupMixin as Mixin];
