import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InvestmentOrDepositMixin } from '../lib/InvestmentOrDeposit';
import { InvestmentFundMixin } from '../lib/InvestmentFund';

export const InvestmentFundBundle = [
  InvestmentOrDepositMixin as Mixin,
  InvestmentFundMixin as Mixin];
