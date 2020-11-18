import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { OrganizationMixin } from '../lib/Organization';
import { EducationalOrganizationMixin } from '../lib/EducationalOrganization';
import { PersonMixin } from '../lib/Person';

export const EducationalOrganizationBundle = [
  CivicStructureMixin as Mixin,
  OrganizationMixin as Mixin,
  EducationalOrganizationMixin as Mixin,
  PersonMixin as Mixin];
