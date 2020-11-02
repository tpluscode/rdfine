import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InvestmentOrDepositMixin } from '../InvestmentOrDeposit';
import { InvestmentFundMixin } from '../InvestmentFund';

export const InvestmentFundBundle = [
  InvestmentOrDepositMixin as Mixin,
  InvestmentFundMixin as Mixin];
