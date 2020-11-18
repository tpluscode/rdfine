import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalRiskEstimatorMixin } from '../lib/MedicalRiskEstimator';
import { MedicalRiskCalculatorMixin } from '../lib/MedicalRiskCalculator';

export const MedicalRiskCalculatorBundle = [
  MedicalRiskEstimatorMixin as Mixin,
  MedicalRiskCalculatorMixin as Mixin];
