import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { ResearchOrganizationMixin } from '../lib/ResearchOrganization';

export const ResearchOrganizationBundle = [
  OrganizationMixin as Mixin,
  ResearchOrganizationMixin as Mixin];
