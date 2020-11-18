import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { PerformingGroupMixin } from '../lib/PerformingGroup';

export const PerformingGroupBundle = [
  OrganizationMixin as Mixin,
  PerformingGroupMixin as Mixin];
