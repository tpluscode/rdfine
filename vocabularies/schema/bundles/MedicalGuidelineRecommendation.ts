import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalGuidelineMixin } from '../MedicalGuideline';
import { MedicalGuidelineRecommendationMixin } from '../MedicalGuidelineRecommendation';

export const MedicalGuidelineRecommendationBundle = [
  MedicalGuidelineMixin as Mixin,
  MedicalGuidelineRecommendationMixin as Mixin];
