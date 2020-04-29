import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOrganizationMixin } from '../EducationalOrganization';
import { SchoolMixin } from '../School';

export const SchoolDependencies = [
  EducationalOrganizationMixin as Mixin,
  SchoolMixin as Mixin];
