import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { WarrantyPromiseMixin } from '../lib/WarrantyPromise';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const WarrantyPromiseBundle = [
  StructuredValueMixin as Mixin,
  WarrantyPromiseMixin as Mixin,
  QuantitativeValueMixin as Mixin];
