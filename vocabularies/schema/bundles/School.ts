import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOrganizationMixin } from '../lib/EducationalOrganization';
import { SchoolMixin } from '../lib/School';

export const SchoolBundle = [
  EducationalOrganizationMixin as Mixin,
  SchoolMixin as Mixin];
