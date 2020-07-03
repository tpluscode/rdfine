import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { QuantityMixin } from '../Quantity';
import { DistanceMixin } from '../Distance';

export const DistanceBundle = [
  QuantityMixin as Mixin,
  DistanceMixin as Mixin];
