import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DurationMixin } from '../lib/Duration';
import { QuantityMixin } from '../lib/Quantity';

export const DurationBundle = [
  DurationMixin as Mixin,
  QuantityMixin as Mixin];
