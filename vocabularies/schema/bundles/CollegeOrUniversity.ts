import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOrganizationMixin } from '../EducationalOrganization';
import { CollegeOrUniversityMixin } from '../CollegeOrUniversity';

export const CollegeOrUniversityBundle = [
  EducationalOrganizationMixin as Mixin,
  CollegeOrUniversityMixin as Mixin];
