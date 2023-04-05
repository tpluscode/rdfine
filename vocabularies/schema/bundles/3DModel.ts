import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { _3DModelMixin } from '../lib/3DModel';
import { MediaObjectMixin } from '../lib/MediaObject';

export const _3DModelBundle = [
  _3DModelMixin as Mixin,
  MediaObjectMixin as Mixin];
