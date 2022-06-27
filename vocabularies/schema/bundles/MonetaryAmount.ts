import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const MonetaryAmountBundle = [
  MonetaryAmountMixin as Mixin,
  StructuredValueMixin as Mixin];
