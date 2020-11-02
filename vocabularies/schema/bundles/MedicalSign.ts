import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalSignOrSymptomMixin } from '../MedicalSignOrSymptom';
import { MedicalSignMixin } from '../MedicalSign';
import { MedicalTestMixin } from '../MedicalTest';

export const MedicalSignBundle = [
  MedicalSignOrSymptomMixin as Mixin,
  MedicalSignMixin as Mixin,
  MedicalTestMixin as Mixin];
