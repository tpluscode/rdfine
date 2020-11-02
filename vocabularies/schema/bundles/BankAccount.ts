import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialProductMixin } from '../FinancialProduct';
import { BankAccountMixin } from '../BankAccount';
import { MonetaryAmountMixin } from '../MonetaryAmount';

export const BankAccountBundle = [
  FinancialProductMixin as Mixin,
  BankAccountMixin as Mixin,
  MonetaryAmountMixin as Mixin];
