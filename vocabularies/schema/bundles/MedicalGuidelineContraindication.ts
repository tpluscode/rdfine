import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalGuidelineContraindicationMixin } from '../lib/MedicalGuidelineContraindication';
import { MedicalGuidelineMixin } from '../lib/MedicalGuideline';

export const MedicalGuidelineContraindicationBundle = [
  MedicalGuidelineContraindicationMixin as Mixin,
  MedicalGuidelineMixin as Mixin];
