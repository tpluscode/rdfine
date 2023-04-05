import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PointMixin } from '../lib/Point';
import { SpatialThingMixin } from '../lib/SpatialThing';

export const PointBundle = [
  PointMixin as Mixin,
  SpatialThingMixin as Mixin];
