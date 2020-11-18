import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AssessActionMixin } from '../lib/AssessAction';
import { ReviewActionMixin } from '../lib/ReviewAction';
import { ReviewMixin } from '../lib/Review';

export const ReviewActionBundle = [
  AssessActionMixin as Mixin,
  ReviewActionMixin as Mixin,
  ReviewMixin as Mixin];
