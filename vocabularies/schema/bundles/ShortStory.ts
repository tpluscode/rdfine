import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { ShortStoryMixin } from '../ShortStory';

export const ShortStoryBundle = [
  CreativeWorkMixin as Mixin,
  ShortStoryMixin as Mixin];
