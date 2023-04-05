import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BankAccountMixin } from '../lib/BankAccount';
import { DepositAccountMixin } from '../lib/DepositAccount';
import { InvestmentOrDepositMixin } from '../lib/InvestmentOrDeposit';

export const DepositAccountBundle = [
  BankAccountMixin as Mixin,
  DepositAccountMixin as Mixin,
  InvestmentOrDepositMixin as Mixin];
