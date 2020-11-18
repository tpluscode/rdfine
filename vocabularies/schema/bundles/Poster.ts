import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { PosterMixin } from '../lib/Poster';

export const PosterBundle = [
  CreativeWorkMixin as Mixin,
  PosterMixin as Mixin];
