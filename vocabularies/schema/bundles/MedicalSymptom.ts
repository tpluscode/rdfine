import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalSignOrSymptomMixin } from '../MedicalSignOrSymptom';
import { MedicalSymptomMixin } from '../MedicalSymptom';

export const MedicalSymptomBundle = [
  MedicalSignOrSymptomMixin as Mixin,
  MedicalSymptomMixin as Mixin];
