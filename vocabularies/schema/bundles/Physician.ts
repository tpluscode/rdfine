import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalOrganizationMixin } from '../MedicalOrganization';
import { PhysicianMixin } from '../Physician';
import { MedicalProcedureMixin } from '../MedicalProcedure';
import { MedicalTestMixin } from '../MedicalTest';
import { MedicalTherapyMixin } from '../MedicalTherapy';
import { HospitalMixin } from '../Hospital';

export const PhysicianBundle = [
  MedicalOrganizationMixin as Mixin,
  PhysicianMixin as Mixin,
  MedicalProcedureMixin as Mixin,
  MedicalTestMixin as Mixin,
  MedicalTherapyMixin as Mixin,
  HospitalMixin as Mixin];
