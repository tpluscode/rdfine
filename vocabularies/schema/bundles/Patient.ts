import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DrugMixin } from '../lib/Drug';
import { MedicalAudienceMixin } from '../lib/MedicalAudience';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { PatientMixin } from '../lib/Patient';
import { PersonMixin } from '../lib/Person';

export const PatientBundle = [
  DrugMixin as Mixin,
  MedicalAudienceMixin as Mixin,
  MedicalConditionMixin as Mixin,
  PatientMixin as Mixin,
  PersonMixin as Mixin];
