import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalOrganizationMixin } from '../lib/MedicalOrganization';
import { PharmacyMixin } from '../lib/Pharmacy';

export const PharmacyBundle = [
  MedicalOrganizationMixin as Mixin,
  PharmacyMixin as Mixin];
