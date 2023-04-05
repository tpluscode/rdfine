import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AmpStoryMixin } from '../lib/AmpStory';
import { CreativeWorkMixin } from '../lib/CreativeWork';

export const AmpStoryBundle = [
  AmpStoryMixin as Mixin,
  CreativeWorkMixin as Mixin];
