import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PerformingGroupMixin } from '../PerformingGroup';
import { DanceGroupMixin } from '../DanceGroup';

export const DanceGroupDependencies = [
  PerformingGroupMixin as Mixin,
  DanceGroupMixin as Mixin];
