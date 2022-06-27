import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CDCPMDRecordMixin } from '../lib/CDCPMDRecord';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { DatasetMixin } from '../lib/Dataset';
import { EmergencyServiceMixin } from '../lib/EmergencyService';
import { HospitalMixin } from '../lib/Hospital';
import { MedicalOrganizationMixin } from '../lib/MedicalOrganization';
import { MedicalProcedureMixin } from '../lib/MedicalProcedure';
import { MedicalTestMixin } from '../lib/MedicalTest';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';

export const HospitalBundle = [
  CDCPMDRecordMixin as Mixin,
  CivicStructureMixin as Mixin,
  DatasetMixin as Mixin,
  EmergencyServiceMixin as Mixin,
  HospitalMixin as Mixin,
  MedicalOrganizationMixin as Mixin,
  MedicalProcedureMixin as Mixin,
  MedicalTestMixin as Mixin,
  MedicalTherapyMixin as Mixin];
