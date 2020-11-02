import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalRiskEstimatorMixin } from '../MedicalRiskEstimator';
import { MedicalRiskCalculatorMixin } from '../MedicalRiskCalculator';

export const MedicalRiskCalculatorBundle = [
  MedicalRiskEstimatorMixin as Mixin,
  MedicalRiskCalculatorMixin as Mixin];
