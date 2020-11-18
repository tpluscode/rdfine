import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOrganizationMixin } from '../lib/EducationalOrganization';
import { CollegeOrUniversityMixin } from '../lib/CollegeOrUniversity';

export const CollegeOrUniversityBundle = [
  EducationalOrganizationMixin as Mixin,
  CollegeOrUniversityMixin as Mixin];
