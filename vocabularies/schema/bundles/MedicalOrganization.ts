import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalOrganizationMixin } from '../lib/MedicalOrganization';
import { OrganizationMixin } from '../lib/Organization';

export const MedicalOrganizationBundle = [
  MedicalOrganizationMixin as Mixin,
  OrganizationMixin as Mixin];
