import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { PosterMixin } from '../Poster';

export const PosterBundle = [
  CreativeWorkMixin as Mixin,
  PosterMixin as Mixin];
