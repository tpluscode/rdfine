import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalRiskEstimatorMixin } from '../lib/MedicalRiskEstimator';
import { MedicalRiskFactorMixin } from '../lib/MedicalRiskFactor';

export const MedicalRiskEstimatorBundle = [
  MedicalEntityMixin as Mixin,
  MedicalRiskEstimatorMixin as Mixin,
  MedicalRiskFactorMixin as Mixin];
