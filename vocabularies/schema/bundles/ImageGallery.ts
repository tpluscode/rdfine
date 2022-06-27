import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ImageGalleryMixin } from '../lib/ImageGallery';
import { MediaGalleryMixin } from '../lib/MediaGallery';

export const ImageGalleryBundle = [
  ImageGalleryMixin as Mixin,
  MediaGalleryMixin as Mixin];
