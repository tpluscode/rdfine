import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BankAccountMixin } from '../lib/BankAccount';
import { InvestmentOrDepositMixin } from '../lib/InvestmentOrDeposit';
import { DepositAccountMixin } from '../lib/DepositAccount';

export const DepositAccountBundle = [
  BankAccountMixin as Mixin,
  InvestmentOrDepositMixin as Mixin,
  DepositAccountMixin as Mixin];
