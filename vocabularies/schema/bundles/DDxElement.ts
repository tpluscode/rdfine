import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DDxElementMixin } from '../lib/DDxElement';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { MedicalIntangibleMixin } from '../lib/MedicalIntangible';
import { MedicalSignOrSymptomMixin } from '../lib/MedicalSignOrSymptom';

export const DDxElementBundle = [
  DDxElementMixin as Mixin,
  MedicalConditionMixin as Mixin,
  MedicalIntangibleMixin as Mixin,
  MedicalSignOrSymptomMixin as Mixin];
