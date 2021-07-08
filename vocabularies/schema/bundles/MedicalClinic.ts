import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalOrganizationMixin } from '../lib/MedicalOrganization';
import { MedicalClinicMixin } from '../lib/MedicalClinic';
import { MedicalTestMixin } from '../lib/MedicalTest';
import { MedicalProcedureMixin } from '../lib/MedicalProcedure';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';

export const MedicalClinicBundle = [
  MedicalOrganizationMixin as Mixin,
  MedicalClinicMixin as Mixin,
  MedicalTestMixin as Mixin,
  MedicalProcedureMixin as Mixin,
  MedicalTherapyMixin as Mixin];
