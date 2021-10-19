import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReviewMixin } from '../lib/Review';
import { MediaReviewMixin } from '../lib/MediaReview';
import { MediaObjectMixin } from '../lib/MediaObject';
import { WebPageMixin } from '../lib/WebPage';

export const MediaReviewBundle = [
  ReviewMixin as Mixin,
  MediaReviewMixin as Mixin,
  MediaObjectMixin as Mixin,
  WebPageMixin as Mixin];
