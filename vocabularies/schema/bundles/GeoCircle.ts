import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GeoShapeMixin } from '../lib/GeoShape';
import { GeoCircleMixin } from '../lib/GeoCircle';
import { GeoCoordinatesMixin } from '../lib/GeoCoordinates';
import { DistanceMixin } from '../lib/Distance';

export const GeoCircleBundle = [
  GeoShapeMixin as Mixin,
  GeoCircleMixin as Mixin,
  GeoCoordinatesMixin as Mixin,
  DistanceMixin as Mixin];
