import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReviewMixin } from '../Review';
import { UserReviewMixin } from '../UserReview';

export const UserReviewBundle = [
  ReviewMixin as Mixin,
  UserReviewMixin as Mixin];
