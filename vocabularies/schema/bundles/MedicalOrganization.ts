import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { MedicalOrganizationMixin } from '../lib/MedicalOrganization';

export const MedicalOrganizationBundle = [
  OrganizationMixin as Mixin,
  MedicalOrganizationMixin as Mixin];
