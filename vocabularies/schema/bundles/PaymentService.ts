import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialProductMixin } from '../lib/FinancialProduct';
import { PaymentServiceMixin } from '../lib/PaymentService';

export const PaymentServiceBundle = [
  FinancialProductMixin as Mixin,
  PaymentServiceMixin as Mixin];
