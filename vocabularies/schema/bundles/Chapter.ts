import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ChapterMixin } from '../lib/Chapter';
import { CreativeWorkMixin } from '../lib/CreativeWork';

export const ChapterBundle = [
  ChapterMixin as Mixin,
  CreativeWorkMixin as Mixin];
