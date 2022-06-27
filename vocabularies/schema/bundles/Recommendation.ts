import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RecommendationMixin } from '../lib/Recommendation';
import { ReviewMixin } from '../lib/Review';
import { ThingMixin } from '../lib/Thing';

export const RecommendationBundle = [
  RecommendationMixin as Mixin,
  ReviewMixin as Mixin,
  ThingMixin as Mixin];
