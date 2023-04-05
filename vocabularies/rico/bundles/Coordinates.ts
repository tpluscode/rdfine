import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CoordinatesMixin } from '../lib/Coordinates';
import { PhysicalLocationMixin } from '../lib/PhysicalLocation';
import { ThingMixin } from '../lib/Thing';

export const CoordinatesBundle = [
  CoordinatesMixin as Mixin,
  PhysicalLocationMixin as Mixin,
  ThingMixin as Mixin];
