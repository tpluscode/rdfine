import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaGalleryMixin } from '../lib/MediaGallery';
import { ImageGalleryMixin } from '../lib/ImageGallery';

export const ImageGalleryBundle = [
  MediaGalleryMixin as Mixin,
  ImageGalleryMixin as Mixin];
