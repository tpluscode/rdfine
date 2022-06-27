import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalSignMixin } from '../lib/MedicalSign';
import { MedicalSignOrSymptomMixin } from '../lib/MedicalSignOrSymptom';
import { MedicalTestMixin } from '../lib/MedicalTest';

export const MedicalSignBundle = [
  MedicalSignMixin as Mixin,
  MedicalSignOrSymptomMixin as Mixin,
  MedicalTestMixin as Mixin];
