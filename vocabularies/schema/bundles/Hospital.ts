import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { EmergencyServiceMixin } from '../EmergencyService';
import { MedicalOrganizationMixin } from '../MedicalOrganization';
import { HospitalMixin } from '../Hospital';
import { MedicalProcedureMixin } from '../MedicalProcedure';
import { MedicalTestMixin } from '../MedicalTest';
import { MedicalTherapyMixin } from '../MedicalTherapy';
import { CDCPMDRecordMixin } from '../CDCPMDRecord';
import { DatasetMixin } from '../Dataset';

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
