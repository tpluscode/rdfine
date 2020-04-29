import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { MapMixin } from '../Map';

export const MapDependencies = [
  CreativeWorkMixin as Mixin,
  MapMixin as Mixin];
