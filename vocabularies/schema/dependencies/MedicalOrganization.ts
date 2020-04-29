import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { MedicalOrganizationMixin } from '../MedicalOrganization';

export const MedicalOrganizationDependencies = [
  OrganizationMixin as Mixin,
  MedicalOrganizationMixin as Mixin];
