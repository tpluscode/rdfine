import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalSignOrSymptomMixin } from '../lib/MedicalSignOrSymptom';
import { MedicalSymptomMixin } from '../lib/MedicalSymptom';

export const MedicalSymptomBundle = [
  MedicalSignOrSymptomMixin as Mixin,
  MedicalSymptomMixin as Mixin];
