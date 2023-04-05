import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialProductMixin } from '../lib/FinancialProduct';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { ServiceMixin } from '../lib/Service';

export const FinancialProductBundle = [
  FinancialProductMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  ServiceMixin as Mixin];
