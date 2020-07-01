import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { EmergencyServiceMixin } from '../EmergencyService';
import { MedicalOrganizationMixin } from '../MedicalOrganization';
import { HospitalMixin } from '../Hospital';

export const HospitalBundle = [
  CivicStructureMixin as Mixin,
  EmergencyServiceMixin as Mixin,
  MedicalOrganizationMixin as Mixin,
  HospitalMixin as Mixin];
