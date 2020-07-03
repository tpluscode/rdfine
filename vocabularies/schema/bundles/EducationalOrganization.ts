import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { OrganizationMixin } from '../Organization';
import { EducationalOrganizationMixin } from '../EducationalOrganization';
import { PersonMixin } from '../Person';

export const EducationalOrganizationBundle = [
  CivicStructureMixin as Mixin,
  OrganizationMixin as Mixin,
  EducationalOrganizationMixin as Mixin,
  PersonMixin as Mixin];
