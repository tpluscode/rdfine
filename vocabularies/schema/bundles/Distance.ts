import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DistanceMixin } from '../lib/Distance';
import { QuantityMixin } from '../lib/Quantity';

export const DistanceBundle = [
  DistanceMixin as Mixin,
  QuantityMixin as Mixin];
