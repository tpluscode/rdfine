import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaGalleryMixin } from '../lib/MediaGallery';
import { VideoGalleryMixin } from '../lib/VideoGallery';

export const VideoGalleryBundle = [
  MediaGalleryMixin as Mixin,
  VideoGalleryMixin as Mixin];
