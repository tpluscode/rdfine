import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialProductMixin } from '../FinancialProduct';
import { LoanOrCreditMixin } from '../LoanOrCredit';
import { MonetaryAmountMixin } from '../MonetaryAmount';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { ThingMixin } from '../Thing';

export const LoanOrCreditDependencies = [
  FinancialProductMixin as Mixin,
  LoanOrCreditMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  ThingMixin as Mixin];
