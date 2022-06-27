import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClaimReviewMixin } from '../lib/ClaimReview';
import { ReviewMixin } from '../lib/Review';

export const ClaimReviewBundle = [
  ClaimReviewMixin as Mixin,
  ReviewMixin as Mixin];
