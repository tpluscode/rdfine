import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalOrganizationMixin } from '../lib/MedicalOrganization';
import { PhysicianMixin } from '../lib/Physician';
import { MedicalTestMixin } from '../lib/MedicalTest';
import { MedicalProcedureMixin } from '../lib/MedicalProcedure';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';
import { HospitalMixin } from '../lib/Hospital';

export const PhysicianBundle = [
  MedicalOrganizationMixin as Mixin,
  PhysicianMixin as Mixin,
  MedicalTestMixin as Mixin,
  MedicalProcedureMixin as Mixin,
  MedicalTherapyMixin as Mixin,
  HospitalMixin as Mixin];
