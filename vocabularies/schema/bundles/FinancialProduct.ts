import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../Service';
import { FinancialProductMixin } from '../FinancialProduct';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const FinancialProductBundle = [
  ServiceMixin as Mixin,
  FinancialProductMixin as Mixin,
  QuantitativeValueMixin as Mixin];
