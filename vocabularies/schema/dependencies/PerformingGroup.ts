import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { PerformingGroupMixin } from '../PerformingGroup';

export const PerformingGroupDependencies = [
  OrganizationMixin as Mixin,
  PerformingGroupMixin as Mixin];
