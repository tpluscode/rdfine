import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClipMixin } from '../lib/Clip';
import { MovieClipMixin } from '../lib/MovieClip';

export const MovieClipBundle = [
  ClipMixin as Mixin,
  MovieClipMixin as Mixin];
