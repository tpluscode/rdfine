import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DrawingMixin } from '../lib/Drawing';

export const DrawingBundle = [
  CreativeWorkMixin as Mixin,
  DrawingMixin as Mixin];
