import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SpatialThingMixin } from '../SpatialThing';
import { PointMixin } from '../Point';

export const PointBundle = [
  SpatialThingMixin as Mixin,
  PointMixin as Mixin];
