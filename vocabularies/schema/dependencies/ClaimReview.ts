import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReviewMixin } from '../Review';
import { ClaimReviewMixin } from '../ClaimReview';

export const ClaimReviewDependencies = [
  ReviewMixin as Mixin,
  ClaimReviewMixin as Mixin];
