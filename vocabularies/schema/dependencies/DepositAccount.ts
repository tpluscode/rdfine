import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BankAccountMixin } from '../BankAccount';
import { InvestmentOrDepositMixin } from '../InvestmentOrDeposit';
import { DepositAccountMixin } from '../DepositAccount';

export const DepositAccountDependencies = [
  BankAccountMixin as Mixin,
  InvestmentOrDepositMixin as Mixin,
  DepositAccountMixin as Mixin];
