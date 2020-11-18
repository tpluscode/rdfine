import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { GovernmentOrganizationMixin } from '../lib/GovernmentOrganization';

export const GovernmentOrganizationBundle = [
  OrganizationMixin as Mixin,
  GovernmentOrganizationMixin as Mixin];
