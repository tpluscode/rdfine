import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProductMixin } from '../lib/Product';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { SomeProductsMixin } from '../lib/SomeProducts';

export const SomeProductsBundle = [
  ProductMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  SomeProductsMixin as Mixin];
