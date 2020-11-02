import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalIntangibleMixin } from '../MedicalIntangible';
import { DDxElementMixin } from '../DDxElement';
import { MedicalConditionMixin } from '../MedicalCondition';
import { MedicalSignOrSymptomMixin } from '../MedicalSignOrSymptom';

export const DDxElementBundle = [
  MedicalIntangibleMixin as Mixin,
  DDxElementMixin as Mixin,
  MedicalConditionMixin as Mixin,
  MedicalSignOrSymptomMixin as Mixin];
