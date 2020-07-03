import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOrganizationMixin } from '../EducationalOrganization';
import { ElementarySchoolMixin } from '../ElementarySchool';

export const ElementarySchoolBundle = [
  EducationalOrganizationMixin as Mixin,
  ElementarySchoolMixin as Mixin];
