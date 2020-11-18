import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialProductMixin } from '../lib/FinancialProduct';
import { BankAccountMixin } from '../lib/BankAccount';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';

export const BankAccountBundle = [
  FinancialProductMixin as Mixin,
  BankAccountMixin as Mixin,
  MonetaryAmountMixin as Mixin];
