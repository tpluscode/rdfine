import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { QuantityMixin } from '../lib/Quantity';
import { DurationMixin } from '../lib/Duration';

export const DurationBundle = [
  QuantityMixin as Mixin,
  DurationMixin as Mixin];
