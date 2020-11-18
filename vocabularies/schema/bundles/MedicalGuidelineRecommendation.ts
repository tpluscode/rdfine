import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalGuidelineMixin } from '../lib/MedicalGuideline';
import { MedicalGuidelineRecommendationMixin } from '../lib/MedicalGuidelineRecommendation';

export const MedicalGuidelineRecommendationBundle = [
  MedicalGuidelineMixin as Mixin,
  MedicalGuidelineRecommendationMixin as Mixin];
