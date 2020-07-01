import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOrganizationMixin } from '../EducationalOrganization';
import { HighSchoolMixin } from '../HighSchool';

export const HighSchoolBundle = [
  EducationalOrganizationMixin as Mixin,
  HighSchoolMixin as Mixin];
