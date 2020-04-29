import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOrganizationMixin } from '../EducationalOrganization';
import { CollegeOrUniversityMixin } from '../CollegeOrUniversity';

export const CollegeOrUniversityDependencies = [
  EducationalOrganizationMixin as Mixin,
  CollegeOrUniversityMixin as Mixin];
