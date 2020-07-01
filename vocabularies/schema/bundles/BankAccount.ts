import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialProductMixin } from '../FinancialProduct';
import { BankAccountMixin } from '../BankAccount';

export const BankAccountBundle = [
  FinancialProductMixin as Mixin,
  BankAccountMixin as Mixin];
