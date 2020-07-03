import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AssessActionMixin } from '../AssessAction';
import { ReviewActionMixin } from '../ReviewAction';
import { ReviewMixin } from '../Review';

export const ReviewActionBundle = [
  AssessActionMixin as Mixin,
  ReviewActionMixin as Mixin,
  ReviewMixin as Mixin];
