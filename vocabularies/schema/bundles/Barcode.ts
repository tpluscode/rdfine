import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BarcodeMixin } from '../lib/Barcode';
import { ImageObjectMixin } from '../lib/ImageObject';

export const BarcodeBundle = [
  BarcodeMixin as Mixin,
  ImageObjectMixin as Mixin];
