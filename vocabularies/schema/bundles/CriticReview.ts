import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReviewMixin } from '../lib/Review';
import { CriticReviewMixin } from '../lib/CriticReview';

export const CriticReviewBundle = [
  ReviewMixin as Mixin,
  CriticReviewMixin as Mixin];
