import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalSignOrSymptomMixin } from '../lib/MedicalSignOrSymptom';
import { MedicalSignMixin } from '../lib/MedicalSign';
import { MedicalTestMixin } from '../lib/MedicalTest';

export const MedicalSignBundle = [
  MedicalSignOrSymptomMixin as Mixin,
  MedicalSignMixin as Mixin,
  MedicalTestMixin as Mixin];
