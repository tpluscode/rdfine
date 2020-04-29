import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionPageMixin } from '../CollectionPage';
import { MediaGalleryMixin } from '../MediaGallery';

export const MediaGalleryDependencies = [
  CollectionPageMixin as Mixin,
  MediaGalleryMixin as Mixin];
