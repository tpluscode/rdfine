import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOrganizationMixin } from '../EducationalOrganization';
import { MiddleSchoolMixin } from '../MiddleSchool';

export const MiddleSchoolBundle = [
  EducationalOrganizationMixin as Mixin,
  MiddleSchoolMixin as Mixin];
