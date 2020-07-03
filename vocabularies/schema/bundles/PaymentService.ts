import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialProductMixin } from '../FinancialProduct';
import { PaymentServiceMixin } from '../PaymentService';

export const PaymentServiceBundle = [
  FinancialProductMixin as Mixin,
  PaymentServiceMixin as Mixin];
