import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOrganizationMixin } from '../lib/EducationalOrganization';
import { PreschoolMixin } from '../lib/Preschool';

export const PreschoolBundle = [
  EducationalOrganizationMixin as Mixin,
  PreschoolMixin as Mixin];
