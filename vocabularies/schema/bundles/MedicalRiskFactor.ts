import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { MedicalRiskFactorMixin } from '../MedicalRiskFactor';

export const MedicalRiskFactorBundle = [
  MedicalEntityMixin as Mixin,
  MedicalRiskFactorMixin as Mixin];
