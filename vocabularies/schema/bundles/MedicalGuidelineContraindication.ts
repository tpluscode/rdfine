import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalGuidelineMixin } from '../MedicalGuideline';
import { MedicalGuidelineContraindicationMixin } from '../MedicalGuidelineContraindication';

export const MedicalGuidelineContraindicationBundle = [
  MedicalGuidelineMixin as Mixin,
  MedicalGuidelineContraindicationMixin as Mixin];
