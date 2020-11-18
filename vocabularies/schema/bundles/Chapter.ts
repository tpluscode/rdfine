import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ChapterMixin } from '../lib/Chapter';

export const ChapterBundle = [
  CreativeWorkMixin as Mixin,
  ChapterMixin as Mixin];
