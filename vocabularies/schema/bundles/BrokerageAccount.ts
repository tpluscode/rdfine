import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BrokerageAccountMixin } from '../lib/BrokerageAccount';
import { InvestmentOrDepositMixin } from '../lib/InvestmentOrDeposit';

export const BrokerageAccountBundle = [
  BrokerageAccountMixin as Mixin,
  InvestmentOrDepositMixin as Mixin];
