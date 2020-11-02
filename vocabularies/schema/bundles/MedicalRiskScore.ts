import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalRiskEstimatorMixin } from '../MedicalRiskEstimator';
import { MedicalRiskScoreMixin } from '../MedicalRiskScore';

export const MedicalRiskScoreBundle = [
  MedicalRiskEstimatorMixin as Mixin,
  MedicalRiskScoreMixin as Mixin];
