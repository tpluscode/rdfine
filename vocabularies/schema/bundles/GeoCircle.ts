import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DistanceMixin } from '../lib/Distance';
import { GeoCircleMixin } from '../lib/GeoCircle';
import { GeoCoordinatesMixin } from '../lib/GeoCoordinates';
import { GeoShapeMixin } from '../lib/GeoShape';

export const GeoCircleBundle = [
  DistanceMixin as Mixin,
  GeoCircleMixin as Mixin,
  GeoCoordinatesMixin as Mixin,
  GeoShapeMixin as Mixin];
