import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProductMixin } from '../lib/Product';
import { SomeProductsMixin } from '../lib/SomeProducts';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const SomeProductsBundle = [
  ProductMixin as Mixin,
  SomeProductsMixin as Mixin,
  QuantitativeValueMixin as Mixin];
