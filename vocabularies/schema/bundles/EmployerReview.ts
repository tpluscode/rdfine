import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReviewMixin } from '../Review';
import { EmployerReviewMixin } from '../EmployerReview';

export const EmployerReviewBundle = [
  ReviewMixin as Mixin,
  EmployerReviewMixin as Mixin];
