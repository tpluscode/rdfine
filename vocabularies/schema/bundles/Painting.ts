import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { PaintingMixin } from '../lib/Painting';

export const PaintingBundle = [
  CreativeWorkMixin as Mixin,
  PaintingMixin as Mixin];
