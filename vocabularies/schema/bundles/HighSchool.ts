import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOrganizationMixin } from '../lib/EducationalOrganization';
import { HighSchoolMixin } from '../lib/HighSchool';

export const HighSchoolBundle = [
  EducationalOrganizationMixin as Mixin,
  HighSchoolMixin as Mixin];
