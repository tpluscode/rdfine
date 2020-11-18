import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaObjectMixin } from '../lib/MediaObject';
import { _3DModelMixin } from '../lib/3DModel';

export const _3DModelBundle = [
  MediaObjectMixin as Mixin,
  _3DModelMixin as Mixin];
