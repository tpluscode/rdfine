import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ImageObjectMixin } from '../lib/ImageObject';
import { MediaObjectMixin } from '../lib/MediaObject';
import { PropertyValueMixin } from '../lib/PropertyValue';

export const ImageObjectBundle = [
  ImageObjectMixin as Mixin,
  MediaObjectMixin as Mixin,
  PropertyValueMixin as Mixin];
