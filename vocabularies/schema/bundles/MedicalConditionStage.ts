import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalIntangibleMixin } from '../MedicalIntangible';
import { MedicalConditionStageMixin } from '../MedicalConditionStage';

export const MedicalConditionStageBundle = [
  MedicalIntangibleMixin as Mixin,
  MedicalConditionStageMixin as Mixin];
