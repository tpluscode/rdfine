import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ComicStoryMixin } from '../lib/ComicStory';
import { PersonMixin } from '../lib/Person';

export const ComicStoryBundle = [
  CreativeWorkMixin as Mixin,
  ComicStoryMixin as Mixin,
  PersonMixin as Mixin];
