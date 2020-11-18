import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';

export const MonetaryAmountBundle = [
  StructuredValueMixin as Mixin,
  MonetaryAmountMixin as Mixin];
