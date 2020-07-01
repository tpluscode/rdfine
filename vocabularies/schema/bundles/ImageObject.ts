import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaObjectMixin } from '../MediaObject';
import { ImageObjectMixin } from '../ImageObject';
import { PropertyValueMixin } from '../PropertyValue';

export const ImageObjectBundle = [
  MediaObjectMixin as Mixin,
  ImageObjectMixin as Mixin,
  PropertyValueMixin as Mixin];
