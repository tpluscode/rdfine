import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaObjectMixin } from '../lib/MediaObject';
import { ImageObjectMixin } from '../lib/ImageObject';
import { PropertyValueMixin } from '../lib/PropertyValue';

export const ImageObjectBundle = [
  MediaObjectMixin as Mixin,
  ImageObjectMixin as Mixin,
  PropertyValueMixin as Mixin];
