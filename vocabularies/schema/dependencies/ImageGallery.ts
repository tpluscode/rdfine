import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaGalleryMixin } from '../MediaGallery';
import { ImageGalleryMixin } from '../ImageGallery';

export const ImageGalleryDependencies = [
  MediaGalleryMixin as Mixin,
  ImageGalleryMixin as Mixin];