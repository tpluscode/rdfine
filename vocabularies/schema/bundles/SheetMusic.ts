import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { SheetMusicMixin } from '../lib/SheetMusic';

export const SheetMusicBundle = [
  CreativeWorkMixin as Mixin,
  SheetMusicMixin as Mixin];
