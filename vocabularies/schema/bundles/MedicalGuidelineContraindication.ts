import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalGuidelineMixin } from '../lib/MedicalGuideline';
import { MedicalGuidelineContraindicationMixin } from '../lib/MedicalGuidelineContraindication';

export const MedicalGuidelineContraindicationBundle = [
  MedicalGuidelineMixin as Mixin,
  MedicalGuidelineContraindicationMixin as Mixin];
