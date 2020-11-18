import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { MedicalSignOrSymptomMixin } from '../lib/MedicalSignOrSymptom';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';

export const MedicalSignOrSymptomBundle = [
  MedicalConditionMixin as Mixin,
  MedicalSignOrSymptomMixin as Mixin,
  MedicalTherapyMixin as Mixin];
