import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SpatialThingMixin } from '../lib/SpatialThing';
import { PointMixin } from '../lib/Point';

export const PointBundle = [
  SpatialThingMixin as Mixin,
  PointMixin as Mixin];
