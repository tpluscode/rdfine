import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InvestmentFundMixin } from '../lib/InvestmentFund';
import { InvestmentOrDepositMixin } from '../lib/InvestmentOrDeposit';

export const InvestmentFundBundle = [
  InvestmentFundMixin as Mixin,
  InvestmentOrDepositMixin as Mixin];
