import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionPageMixin } from '../lib/CollectionPage';
import { MediaGalleryMixin } from '../lib/MediaGallery';

export const MediaGalleryBundle = [
  CollectionPageMixin as Mixin,
  MediaGalleryMixin as Mixin];
