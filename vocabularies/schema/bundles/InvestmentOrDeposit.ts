import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialProductMixin } from '../FinancialProduct';
import { InvestmentOrDepositMixin } from '../InvestmentOrDeposit';
import { MonetaryAmountMixin } from '../MonetaryAmount';

export const InvestmentOrDepositBundle = [
  FinancialProductMixin as Mixin,
  InvestmentOrDepositMixin as Mixin,
  MonetaryAmountMixin as Mixin];
