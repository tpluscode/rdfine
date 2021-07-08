import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { HyperTocMixin } from '../lib/HyperToc';
import { MediaObjectMixin } from '../lib/MediaObject';
import { HyperTocEntryMixin } from '../lib/HyperTocEntry';

export const HyperTocBundle = [
  CreativeWorkMixin as Mixin,
  HyperTocMixin as Mixin,
  MediaObjectMixin as Mixin,
  HyperTocEntryMixin as Mixin];
