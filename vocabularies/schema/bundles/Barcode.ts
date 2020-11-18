import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ImageObjectMixin } from '../lib/ImageObject';
import { BarcodeMixin } from '../lib/Barcode';

export const BarcodeBundle = [
  ImageObjectMixin as Mixin,
  BarcodeMixin as Mixin];
