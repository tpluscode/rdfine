import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { QuantityMixin } from '../lib/Quantity';

export const QuantityBundle = [
  IntangibleMixin as Mixin,
  QuantityMixin as Mixin];
