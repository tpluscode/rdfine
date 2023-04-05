import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MediaObjectMixin } from '../lib/MediaObject';
import { MediaReviewItemMixin } from '../lib/MediaReviewItem';

export const MediaReviewItemBundle = [
  CreativeWorkMixin as Mixin,
  MediaObjectMixin as Mixin,
  MediaReviewItemMixin as Mixin];
