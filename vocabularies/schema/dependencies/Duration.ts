import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { QuantityMixin } from '../Quantity';
import { DurationMixin } from '../Duration';

export const DurationDependencies = [
  QuantityMixin as Mixin,
  DurationMixin as Mixin];
