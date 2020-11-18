import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialProductMixin } from '../lib/FinancialProduct';
import { InvestmentOrDepositMixin } from '../lib/InvestmentOrDeposit';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';

export const InvestmentOrDepositBundle = [
  FinancialProductMixin as Mixin,
  InvestmentOrDepositMixin as Mixin,
  MonetaryAmountMixin as Mixin];
