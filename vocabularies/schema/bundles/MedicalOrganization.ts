import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { MedicalOrganizationMixin } from '../MedicalOrganization';

export const MedicalOrganizationBundle = [
  OrganizationMixin as Mixin,
  MedicalOrganizationMixin as Mixin];
