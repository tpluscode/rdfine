import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { DrawingMixin } from '../Drawing';

export const DrawingBundle = [
  CreativeWorkMixin as Mixin,
  DrawingMixin as Mixin];
