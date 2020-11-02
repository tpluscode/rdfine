import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { MedicalRiskEstimatorMixin } from '../MedicalRiskEstimator';
import { MedicalRiskFactorMixin } from '../MedicalRiskFactor';

export const MedicalRiskEstimatorBundle = [
  MedicalEntityMixin as Mixin,
  MedicalRiskEstimatorMixin as Mixin,
  MedicalRiskFactorMixin as Mixin];
