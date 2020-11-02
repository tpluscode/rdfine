import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { SheetMusicMixin } from '../SheetMusic';

export const SheetMusicBundle = [
  CreativeWorkMixin as Mixin,
  SheetMusicMixin as Mixin];
