import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EmployerReviewMixin } from '../lib/EmployerReview';
import { ReviewMixin } from '../lib/Review';

export const EmployerReviewBundle = [
  EmployerReviewMixin as Mixin,
  ReviewMixin as Mixin];
