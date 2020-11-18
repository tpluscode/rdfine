import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOrganizationMixin } from '../lib/EducationalOrganization';
import { ElementarySchoolMixin } from '../lib/ElementarySchool';

export const ElementarySchoolBundle = [
  EducationalOrganizationMixin as Mixin,
  ElementarySchoolMixin as Mixin];
