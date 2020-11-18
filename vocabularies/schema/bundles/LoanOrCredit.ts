import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialProductMixin } from '../lib/FinancialProduct';
import { LoanOrCreditMixin } from '../lib/LoanOrCredit';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { DurationMixin } from '../lib/Duration';
import { RepaymentSpecificationMixin } from '../lib/RepaymentSpecification';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { ThingMixin } from '../lib/Thing';

export const LoanOrCreditBundle = [
  FinancialProductMixin as Mixin,
  LoanOrCreditMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  DurationMixin as Mixin,
  RepaymentSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  ThingMixin as Mixin];
