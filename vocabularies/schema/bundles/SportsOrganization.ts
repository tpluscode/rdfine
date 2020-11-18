import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { SportsOrganizationMixin } from '../lib/SportsOrganization';

export const SportsOrganizationBundle = [
  OrganizationMixin as Mixin,
  SportsOrganizationMixin as Mixin];
