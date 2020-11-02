import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalAudienceMixin } from '../MedicalAudience';
import { PersonMixin } from '../Person';
import { PatientMixin } from '../Patient';
import { MedicalConditionMixin } from '../MedicalCondition';
import { DrugMixin } from '../Drug';

export const PatientBundle = [
  MedicalAudienceMixin as Mixin,
  PersonMixin as Mixin,
  PatientMixin as Mixin,
  MedicalConditionMixin as Mixin,
  DrugMixin as Mixin];
