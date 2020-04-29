import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ImageObjectMixin } from '../ImageObject';
import { BarcodeMixin } from '../Barcode';

export const BarcodeDependencies = [
  ImageObjectMixin as Mixin,
  BarcodeMixin as Mixin];
