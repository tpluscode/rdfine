import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BankOrCreditUnionMixin } from '../lib/BankOrCreditUnion';
import { FinancialServiceMixin } from '../lib/FinancialService';

export const BankOrCreditUnionBundle = [
  BankOrCreditUnionMixin as Mixin,
  FinancialServiceMixin as Mixin];
