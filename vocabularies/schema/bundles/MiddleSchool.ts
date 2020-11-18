import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOrganizationMixin } from '../lib/EducationalOrganization';
import { MiddleSchoolMixin } from '../lib/MiddleSchool';

export const MiddleSchoolBundle = [
  EducationalOrganizationMixin as Mixin,
  MiddleSchoolMixin as Mixin];
