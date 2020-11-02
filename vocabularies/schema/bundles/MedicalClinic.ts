import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalOrganizationMixin } from '../MedicalOrganization';
import { MedicalClinicMixin } from '../MedicalClinic';
import { MedicalProcedureMixin } from '../MedicalProcedure';
import { MedicalTestMixin } from '../MedicalTest';
import { MedicalTherapyMixin } from '../MedicalTherapy';

export const MedicalClinicBundle = [
  MedicalOrganizationMixin as Mixin,
  MedicalClinicMixin as Mixin,
  MedicalProcedureMixin as Mixin,
  MedicalTestMixin as Mixin,
  MedicalTherapyMixin as Mixin];
