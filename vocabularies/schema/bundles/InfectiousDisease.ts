import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalConditionMixin } from '../MedicalCondition';
import { InfectiousDiseaseMixin } from '../InfectiousDisease';

export const InfectiousDiseaseBundle = [
  MedicalConditionMixin as Mixin,
  InfectiousDiseaseMixin as Mixin];
