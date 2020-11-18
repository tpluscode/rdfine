import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalAudienceMixin } from '../lib/MedicalAudience';
import { PersonMixin } from '../lib/Person';
import { PatientMixin } from '../lib/Patient';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { DrugMixin } from '../lib/Drug';

export const PatientBundle = [
  MedicalAudienceMixin as Mixin,
  PersonMixin as Mixin,
  PatientMixin as Mixin,
  MedicalConditionMixin as Mixin,
  DrugMixin as Mixin];
