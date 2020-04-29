import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialProductMixin } from '../FinancialProduct';
import { BankAccountMixin } from '../BankAccount';

export const BankAccountDependencies = [
  FinancialProductMixin as Mixin,
  BankAccountMixin as Mixin];
