import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollegeOrUniversityMixin } from '../lib/CollegeOrUniversity';
import { EducationalOrganizationMixin } from '../lib/EducationalOrganization';

export const CollegeOrUniversityBundle = [
  CollegeOrUniversityMixin as Mixin,
  EducationalOrganizationMixin as Mixin];
