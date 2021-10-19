import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MediaReviewItemMixin } from '../lib/MediaReviewItem';
import { MediaObjectMixin } from '../lib/MediaObject';

export const MediaReviewItemBundle = [
  CreativeWorkMixin as Mixin,
  MediaReviewItemMixin as Mixin,
  MediaObjectMixin as Mixin];
