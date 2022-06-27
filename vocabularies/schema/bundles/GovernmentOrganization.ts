import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GovernmentOrganizationMixin } from '../lib/GovernmentOrganization';
import { OrganizationMixin } from '../lib/Organization';

export const GovernmentOrganizationBundle = [
  GovernmentOrganizationMixin as Mixin,
  OrganizationMixin as Mixin];
