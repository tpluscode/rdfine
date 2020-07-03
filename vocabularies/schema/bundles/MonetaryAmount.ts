import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { MonetaryAmountMixin } from '../MonetaryAmount';

export const MonetaryAmountBundle = [
  StructuredValueMixin as Mixin,
  MonetaryAmountMixin as Mixin];
