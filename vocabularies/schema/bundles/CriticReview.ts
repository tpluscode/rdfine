import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CriticReviewMixin } from '../lib/CriticReview';
import { ReviewMixin } from '../lib/Review';

export const CriticReviewBundle = [
  CriticReviewMixin as Mixin,
  ReviewMixin as Mixin];
