import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { EducationalOrganizationMixin } from '../EducationalOrganization';
import { PersonMixin } from '../Person';

export const EducationalOrganizationDependencies = [
  OrganizationMixin as Mixin,
  EducationalOrganizationMixin as Mixin,
  PersonMixin as Mixin];
