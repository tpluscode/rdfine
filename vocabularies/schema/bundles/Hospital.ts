import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { EmergencyServiceMixin } from '../lib/EmergencyService';
import { MedicalOrganizationMixin } from '../lib/MedicalOrganization';
import { HospitalMixin } from '../lib/Hospital';
import { MedicalProcedureMixin } from '../lib/MedicalProcedure';
import { MedicalTestMixin } from '../lib/MedicalTest';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';
import { CDCPMDRecordMixin } from '../lib/CDCPMDRecord';
import { DatasetMixin } from '../lib/Dataset';

export const HospitalBundle = [
  CivicStructureMixin as Mixin,
  EmergencyServiceMixin as Mixin,
  MedicalOrganizationMixin as Mixin,
  HospitalMixin as Mixin,
  MedicalProcedureMixin as Mixin,
  MedicalTestMixin as Mixin,
  MedicalTherapyMixin as Mixin,
  CDCPMDRecordMixin as Mixin,
  DatasetMixin as Mixin];
