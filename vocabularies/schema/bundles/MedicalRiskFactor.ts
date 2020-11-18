import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalRiskFactorMixin } from '../lib/MedicalRiskFactor';

export const MedicalRiskFactorBundle = [
  MedicalEntityMixin as Mixin,
  MedicalRiskFactorMixin as Mixin];
