import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HospitalMixin } from '../lib/Hospital';
import { MedicalOrganizationMixin } from '../lib/MedicalOrganization';
import { MedicalProcedureMixin } from '../lib/MedicalProcedure';
import { MedicalTestMixin } from '../lib/MedicalTest';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';
import { PhysicianMixin } from '../lib/Physician';

export const PhysicianBundle = [
  HospitalMixin as Mixin,
  MedicalOrganizationMixin as Mixin,
  MedicalProcedureMixin as Mixin,
  MedicalTestMixin as Mixin,
  MedicalTherapyMixin as Mixin,
  PhysicianMixin as Mixin];
