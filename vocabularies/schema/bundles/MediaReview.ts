import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReviewMixin } from '../lib/Review';
import { MediaReviewMixin } from '../lib/MediaReview';

export const MediaReviewBundle = [
  ReviewMixin as Mixin,
  MediaReviewMixin as Mixin];
