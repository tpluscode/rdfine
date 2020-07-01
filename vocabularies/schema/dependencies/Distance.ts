import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { QuantityMixin } from '../Quantity';
import { DistanceMixin } from '../Distance';

export const DistanceDependencies = [
  QuantityMixin as Mixin,
  DistanceMixin as Mixin];