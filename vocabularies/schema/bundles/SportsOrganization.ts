import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { SportsOrganizationMixin } from '../SportsOrganization';

export const SportsOrganizationBundle = [
  OrganizationMixin as Mixin,
  SportsOrganizationMixin as Mixin];
