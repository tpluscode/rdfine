import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AmpStoryMixin } from '../lib/AmpStory.js';
import { CreativeWorkMixin } from '../lib/CreativeWork.js';

export const AmpStoryBundle = [
  AmpStoryMixin as Mixin,
  CreativeWorkMixin as Mixin];
