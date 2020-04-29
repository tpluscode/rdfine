import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialServiceMixin } from '../FinancialService';
import { BankOrCreditUnionMixin } from '../BankOrCreditUnion';

export const BankOrCreditUnionDependencies = [
  FinancialServiceMixin as Mixin,
  BankOrCreditUnionMixin as Mixin];
