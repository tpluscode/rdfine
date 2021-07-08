import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { EducationalOrganizationMixin } from '../lib/EducationalOrganization';
import { PersonMixin } from '../lib/Person';

export const EducationalOrganizationBundle = [
  OrganizationMixin as Mixin,
  CivicStructureMixin as Mixin,
  EducationalOrganizationMixin as Mixin,
  PersonMixin as Mixin];
