import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InfectiousDiseaseMixin } from '../lib/InfectiousDisease';
import { MedicalConditionMixin } from '../lib/MedicalCondition';

export const InfectiousDiseaseBundle = [
  InfectiousDiseaseMixin as Mixin,
  MedicalConditionMixin as Mixin];
