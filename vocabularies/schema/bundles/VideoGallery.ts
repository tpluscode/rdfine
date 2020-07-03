import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaGalleryMixin } from '../MediaGallery';
import { VideoGalleryMixin } from '../VideoGallery';

export const VideoGalleryBundle = [
  MediaGalleryMixin as Mixin,
  VideoGalleryMixin as Mixin];
