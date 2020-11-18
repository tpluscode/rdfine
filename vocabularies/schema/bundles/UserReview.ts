import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReviewMixin } from '../lib/Review';
import { UserReviewMixin } from '../lib/UserReview';

export const UserReviewBundle = [
  ReviewMixin as Mixin,
  UserReviewMixin as Mixin];
