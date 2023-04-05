import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ImageObjectMixin } from '../lib/ImageObject';
import { ImageObjectSnapshotMixin } from '../lib/ImageObjectSnapshot';

export const ImageObjectSnapshotBundle = [
  ImageObjectMixin as Mixin,
  ImageObjectSnapshotMixin as Mixin];
