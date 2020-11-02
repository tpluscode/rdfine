import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { ChapterMixin } from '../Chapter';

export const ChapterBundle = [
  CreativeWorkMixin as Mixin,
  ChapterMixin as Mixin];
