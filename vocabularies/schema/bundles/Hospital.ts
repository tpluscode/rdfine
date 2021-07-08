import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { MedicalOrganizationMixin } from '../lib/MedicalOrganization';
import { EmergencyServiceMixin } from '../lib/EmergencyService';
import { HospitalMixin } from '../lib/Hospital';
import { MedicalTestMixin } from '../lib/MedicalTest';
import { MedicalProcedureMixin } from '../lib/MedicalProcedure';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';
import { CDCPMDRecordMixin } from '../lib/CDCPMDRecord';
import { DatasetMixin } from '../lib/Dataset';

export const HospitalBundle = [
  CivicStructureMixin as Mixin,
  MedicalOrganizationMixin as Mixin,
  EmergencyServiceMixin as Mixin,
  HospitalMixin as Mixin,
  MedicalTestMixin as Mixin,
  MedicalProcedureMixin as Mixin,
  MedicalTherapyMixin as Mixin,
  CDCPMDRecordMixin as Mixin,
  DatasetMixin as Mixin];
