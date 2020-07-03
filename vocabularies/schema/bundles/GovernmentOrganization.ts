import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { GovernmentOrganizationMixin } from '../GovernmentOrganization';

export const GovernmentOrganizationBundle = [
  OrganizationMixin as Mixin,
  GovernmentOrganizationMixin as Mixin];
