import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { WarrantyPromiseMixin } from '../WarrantyPromise';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const WarrantyPromiseBundle = [
  StructuredValueMixin as Mixin,
  WarrantyPromiseMixin as Mixin,
  QuantitativeValueMixin as Mixin];
