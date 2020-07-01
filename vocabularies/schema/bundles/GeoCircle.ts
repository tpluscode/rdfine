import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GeoShapeMixin } from '../GeoShape';
import { GeoCircleMixin } from '../GeoCircle';
import { GeoCoordinatesMixin } from '../GeoCoordinates';
import { DistanceMixin } from '../Distance';

export const GeoCircleBundle = [
  GeoShapeMixin as Mixin,
  GeoCircleMixin as Mixin,
  GeoCoordinatesMixin as Mixin,
  DistanceMixin as Mixin];
