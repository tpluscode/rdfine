import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReviewMixin } from '../Review';
import { RecommendationMixin } from '../Recommendation';
import { ThingMixin } from '../Thing';

export const RecommendationBundle = [
  ReviewMixin as Mixin,
  RecommendationMixin as Mixin,
  ThingMixin as Mixin];
