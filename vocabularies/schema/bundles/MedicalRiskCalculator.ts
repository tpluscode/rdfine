import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalRiskCalculatorMixin } from '../lib/MedicalRiskCalculator';
import { MedicalRiskEstimatorMixin } from '../lib/MedicalRiskEstimator';

export const MedicalRiskCalculatorBundle = [
  MedicalRiskCalculatorMixin as Mixin,
  MedicalRiskEstimatorMixin as Mixin];
