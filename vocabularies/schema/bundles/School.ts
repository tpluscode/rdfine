import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOrganizationMixin } from '../EducationalOrganization';
import { SchoolMixin } from '../School';

export const SchoolBundle = [
  EducationalOrganizationMixin as Mixin,
  SchoolMixin as Mixin];
