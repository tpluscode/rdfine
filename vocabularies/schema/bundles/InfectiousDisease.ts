import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { InfectiousDiseaseMixin } from '../lib/InfectiousDisease';

export const InfectiousDiseaseBundle = [
  MedicalConditionMixin as Mixin,
  InfectiousDiseaseMixin as Mixin];
