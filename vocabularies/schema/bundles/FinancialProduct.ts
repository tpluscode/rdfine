import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../lib/Service';
import { FinancialProductMixin } from '../lib/FinancialProduct';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const FinancialProductBundle = [
  ServiceMixin as Mixin,
  FinancialProductMixin as Mixin,
  QuantitativeValueMixin as Mixin];
