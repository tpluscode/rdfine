import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { WarrantyPromiseMixin } from '../lib/WarrantyPromise';

export const WarrantyPromiseBundle = [
  QuantitativeValueMixin as Mixin,
  StructuredValueMixin as Mixin,
  WarrantyPromiseMixin as Mixin];
