import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalClinicMixin } from '../lib/MedicalClinic';
import { MedicalOrganizationMixin } from '../lib/MedicalOrganization';
import { MedicalProcedureMixin } from '../lib/MedicalProcedure';
import { MedicalTestMixin } from '../lib/MedicalTest';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';

export const MedicalClinicBundle = [
  MedicalClinicMixin as Mixin,
  MedicalOrganizationMixin as Mixin,
  MedicalProcedureMixin as Mixin,
  MedicalTestMixin as Mixin,
  MedicalTherapyMixin as Mixin];
