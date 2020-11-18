import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InvestmentOrDepositMixin } from '../lib/InvestmentOrDeposit';
import { BrokerageAccountMixin } from '../lib/BrokerageAccount';

export const BrokerageAccountBundle = [
  InvestmentOrDepositMixin as Mixin,
  BrokerageAccountMixin as Mixin];
