import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ShortStoryMixin } from '../lib/ShortStory';

export const ShortStoryBundle = [
  CreativeWorkMixin as Mixin,
  ShortStoryMixin as Mixin];
