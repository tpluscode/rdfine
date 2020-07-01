import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClipMixin } from '../Clip';
import { MovieClipMixin } from '../MovieClip';

export const MovieClipBundle = [
  ClipMixin as Mixin,
  MovieClipMixin as Mixin];
