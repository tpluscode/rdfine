import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BankAccountMixin } from '../lib/BankAccount';
import { FinancialProductMixin } from '../lib/FinancialProduct';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';

export const BankAccountBundle = [
  BankAccountMixin as Mixin,
  FinancialProductMixin as Mixin,
  MonetaryAmountMixin as Mixin];
