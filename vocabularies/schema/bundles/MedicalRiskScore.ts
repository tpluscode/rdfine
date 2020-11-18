import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalRiskEstimatorMixin } from '../lib/MedicalRiskEstimator';
import { MedicalRiskScoreMixin } from '../lib/MedicalRiskScore';

export const MedicalRiskScoreBundle = [
  MedicalRiskEstimatorMixin as Mixin,
  MedicalRiskScoreMixin as Mixin];
