import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InvestmentOrDepositMixin } from '../InvestmentOrDeposit';
import { BrokerageAccountMixin } from '../BrokerageAccount';

export const BrokerageAccountBundle = [
  InvestmentOrDepositMixin as Mixin,
  BrokerageAccountMixin as Mixin];
