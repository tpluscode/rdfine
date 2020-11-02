import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReviewMixin } from '../Review';
import { MediaReviewMixin } from '../MediaReview';

export const MediaReviewBundle = [
  ReviewMixin as Mixin,
  MediaReviewMixin as Mixin];
