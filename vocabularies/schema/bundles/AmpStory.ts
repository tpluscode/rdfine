import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { AmpStoryMixin } from '../lib/AmpStory';

export const AmpStoryBundle = [
  CreativeWorkMixin as Mixin,
  AmpStoryMixin as Mixin];
