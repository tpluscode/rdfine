import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReviewMixin } from '../lib/Review';
import { RecommendationMixin } from '../lib/Recommendation';
import { ThingMixin } from '../lib/Thing';

export const RecommendationBundle = [
  ReviewMixin as Mixin,
  RecommendationMixin as Mixin,
  ThingMixin as Mixin];
