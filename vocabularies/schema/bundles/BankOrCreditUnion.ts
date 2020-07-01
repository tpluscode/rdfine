import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialServiceMixin } from '../FinancialService';
import { BankOrCreditUnionMixin } from '../BankOrCreditUnion';

export const BankOrCreditUnionBundle = [
  FinancialServiceMixin as Mixin,
  BankOrCreditUnionMixin as Mixin];
