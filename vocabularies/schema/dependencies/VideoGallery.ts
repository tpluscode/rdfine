import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaGalleryMixin } from '../MediaGallery';
import { VideoGalleryMixin } from '../VideoGallery';

export const VideoGalleryDependencies = [
  MediaGalleryMixin as Mixin,
  VideoGalleryMixin as Mixin];
