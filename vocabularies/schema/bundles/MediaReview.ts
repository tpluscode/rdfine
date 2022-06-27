import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaObjectMixin } from '../lib/MediaObject';
import { MediaReviewMixin } from '../lib/MediaReview';
import { ReviewMixin } from '../lib/Review';
import { WebPageMixin } from '../lib/WebPage';

export const MediaReviewBundle = [
  MediaObjectMixin as Mixin,
  MediaReviewMixin as Mixin,
  ReviewMixin as Mixin,
  WebPageMixin as Mixin];
