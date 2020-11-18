import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DocumentMixin } from '../lib/Document';
import { ImageMixin } from '../lib/Image';

export const ImageBundle = [
  DocumentMixin as Mixin,
  ImageMixin as Mixin];
