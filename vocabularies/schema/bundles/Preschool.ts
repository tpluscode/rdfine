import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOrganizationMixin } from '../EducationalOrganization';
import { PreschoolMixin } from '../Preschool';

export const PreschoolBundle = [
  EducationalOrganizationMixin as Mixin,
  PreschoolMixin as Mixin];
