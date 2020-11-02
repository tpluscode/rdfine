import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaObjectMixin } from '../MediaObject';
import { _3DModelMixin } from '../3DModel';

export const _3DModelBundle = [
  MediaObjectMixin as Mixin,
  _3DModelMixin as Mixin];
