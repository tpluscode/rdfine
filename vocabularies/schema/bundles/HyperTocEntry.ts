import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { HyperTocEntryMixin } from '../lib/HyperTocEntry';
import { MediaObjectMixin } from '../lib/MediaObject';

export const HyperTocEntryBundle = [
  CreativeWorkMixin as Mixin,
  HyperTocEntryMixin as Mixin,
  MediaObjectMixin as Mixin];
