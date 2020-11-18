import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { QuantityMixin } from '../lib/Quantity';
import { DistanceMixin } from '../lib/Distance';

export const DistanceBundle = [
  QuantityMixin as Mixin,
  DistanceMixin as Mixin];
