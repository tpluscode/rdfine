import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MapMixin } from '../lib/Map';

export const MapBundle = [
  CreativeWorkMixin as Mixin,
  MapMixin as Mixin];
