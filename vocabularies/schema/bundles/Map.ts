import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { MapMixin } from '../Map';

export const MapBundle = [
  CreativeWorkMixin as Mixin,
  MapMixin as Mixin];
