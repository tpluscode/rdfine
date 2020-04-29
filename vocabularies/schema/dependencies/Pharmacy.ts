import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalOrganizationMixin } from '../MedicalOrganization';
import { PharmacyMixin } from '../Pharmacy';

export const PharmacyDependencies = [
  MedicalOrganizationMixin as Mixin,
  PharmacyMixin as Mixin];
