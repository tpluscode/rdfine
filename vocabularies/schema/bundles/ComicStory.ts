import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ComicStoryMixin } from '../lib/ComicStory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { PersonMixin } from '../lib/Person';

export const ComicStoryBundle = [
  ComicStoryMixin as Mixin,
  CreativeWorkMixin as Mixin,
  PersonMixin as Mixin];
