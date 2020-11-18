import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalIntangibleMixin } from '../lib/MedicalIntangible';
import { MedicalConditionStageMixin } from '../lib/MedicalConditionStage';

export const MedicalConditionStageBundle = [
  MedicalIntangibleMixin as Mixin,
  MedicalConditionStageMixin as Mixin];
