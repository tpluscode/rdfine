import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DocumentMixin } from '../Document';
import { ImageMixin } from '../Image';

export const ImageBundle = [
  DocumentMixin as Mixin,
  ImageMixin as Mixin];
