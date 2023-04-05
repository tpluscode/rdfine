import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { EducationalOrganizationMixin } from '../lib/EducationalOrganization';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const EducationalOrganizationBundle = [
  CivicStructureMixin as Mixin,
  EducationalOrganizationMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
