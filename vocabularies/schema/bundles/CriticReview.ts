import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReviewMixin } from '../Review';
import { CriticReviewMixin } from '../CriticReview';

export const CriticReviewBundle = [
  ReviewMixin as Mixin,
  CriticReviewMixin as Mixin];
