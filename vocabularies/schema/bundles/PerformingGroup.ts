import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { PerformingGroupMixin } from '../PerformingGroup';

export const PerformingGroupBundle = [
  OrganizationMixin as Mixin,
  PerformingGroupMixin as Mixin];
