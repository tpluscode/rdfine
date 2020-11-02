import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalConditionMixin } from '../MedicalCondition';
import { MedicalSignOrSymptomMixin } from '../MedicalSignOrSymptom';
import { MedicalTherapyMixin } from '../MedicalTherapy';

export const MedicalSignOrSymptomBundle = [
  MedicalConditionMixin as Mixin,
  MedicalSignOrSymptomMixin as Mixin,
  MedicalTherapyMixin as Mixin];
