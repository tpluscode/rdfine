import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOrganizationMixin } from '../EducationalOrganization';
import { ElementarySchoolMixin } from '../ElementarySchool';

export const ElementarySchoolDependencies = [
  EducationalOrganizationMixin as Mixin,
  ElementarySchoolMixin as Mixin];
