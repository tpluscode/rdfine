import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialServiceMixin } from '../lib/FinancialService';
import { BankOrCreditUnionMixin } from '../lib/BankOrCreditUnion';

export const BankOrCreditUnionBundle = [
  FinancialServiceMixin as Mixin,
  BankOrCreditUnionMixin as Mixin];
