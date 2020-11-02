import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { ComicStoryMixin } from '../ComicStory';
import { PersonMixin } from '../Person';

export const ComicStoryBundle = [
  CreativeWorkMixin as Mixin,
  ComicStoryMixin as Mixin,
  PersonMixin as Mixin];
