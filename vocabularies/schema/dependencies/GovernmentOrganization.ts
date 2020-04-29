import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { GovernmentOrganizationMixin } from '../GovernmentOrganization';

export const GovernmentOrganizationDependencies = [
  OrganizationMixin as Mixin,
  GovernmentOrganizationMixin as Mixin];
