import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReviewMixin } from '../lib/Review';
import { ClaimReviewMixin } from '../lib/ClaimReview';

export const ClaimReviewBundle = [
  ReviewMixin as Mixin,
  ClaimReviewMixin as Mixin];
