import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CoordinatesMixin } from '../lib/Coordinates';
import { PhysicalLocationMixin } from '../lib/PhysicalLocation';
import { PlaceMixin } from '../lib/Place';
import { ThingMixin } from '../lib/Thing';

export const PhysicalLocationBundle = [
  CoordinatesMixin as Mixin,
  PhysicalLocationMixin as Mixin,
  PlaceMixin as Mixin,
  ThingMixin as Mixin];
