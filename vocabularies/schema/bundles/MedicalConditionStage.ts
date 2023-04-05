import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalConditionStageMixin } from '../lib/MedicalConditionStage';
import { MedicalIntangibleMixin } from '../lib/MedicalIntangible';

export const MedicalConditionStageBundle = [
  MedicalConditionStageMixin as Mixin,
  MedicalIntangibleMixin as Mixin];
