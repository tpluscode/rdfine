import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProductMixin } from '../Product';
import { SomeProductsMixin } from '../SomeProducts';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const SomeProductsDependencies = [
  ProductMixin as Mixin,
  SomeProductsMixin as Mixin,
  QuantitativeValueMixin as Mixin];
