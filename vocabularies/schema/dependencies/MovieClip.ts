import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClipMixin } from '../Clip';
import { MovieClipMixin } from '../MovieClip';

export const MovieClipDependencies = [
  ClipMixin as Mixin,
  MovieClipMixin as Mixin];
