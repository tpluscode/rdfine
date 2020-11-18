import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalIntangibleMixin } from '../lib/MedicalIntangible';
import { DDxElementMixin } from '../lib/DDxElement';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { MedicalSignOrSymptomMixin } from '../lib/MedicalSignOrSymptom';

export const DDxElementBundle = [
  MedicalIntangibleMixin as Mixin,
  DDxElementMixin as Mixin,
  MedicalConditionMixin as Mixin,
  MedicalSignOrSymptomMixin as Mixin];
