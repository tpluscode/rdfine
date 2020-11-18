import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalOrganizationMixin } from '../lib/MedicalOrganization';
import { MedicalClinicMixin } from '../lib/MedicalClinic';
import { MedicalProcedureMixin } from '../lib/MedicalProcedure';
import { MedicalTestMixin } from '../lib/MedicalTest';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';

export const MedicalClinicBundle = [
  MedicalOrganizationMixin as Mixin,
  MedicalClinicMixin as Mixin,
  MedicalProcedureMixin as Mixin,
  MedicalTestMixin as Mixin,
  MedicalTherapyMixin as Mixin];
