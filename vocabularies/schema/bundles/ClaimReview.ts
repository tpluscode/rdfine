import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReviewMixin } from '../Review';
import { ClaimReviewMixin } from '../ClaimReview';

export const ClaimReviewBundle = [
  ReviewMixin as Mixin,
  ClaimReviewMixin as Mixin];
