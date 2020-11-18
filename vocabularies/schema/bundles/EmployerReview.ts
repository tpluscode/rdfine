import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReviewMixin } from '../lib/Review';
import { EmployerReviewMixin } from '../lib/EmployerReview';

export const EmployerReviewBundle = [
  ReviewMixin as Mixin,
  EmployerReviewMixin as Mixin];
