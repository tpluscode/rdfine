import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOrganizationMixin } from '../EducationalOrganization';
import { PreschoolMixin } from '../Preschool';

export const PreschoolDependencies = [
  EducationalOrganizationMixin as Mixin,
  PreschoolMixin as Mixin];
