import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DurationMixin } from '../lib/Duration';
import { FinancialProductMixin } from '../lib/FinancialProduct';
import { LoanOrCreditMixin } from '../lib/LoanOrCredit';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { RepaymentSpecificationMixin } from '../lib/RepaymentSpecification';
import { ThingMixin } from '../lib/Thing';

export const LoanOrCreditBundle = [
  DurationMixin as Mixin,
  FinancialProductMixin as Mixin,
  LoanOrCreditMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  RepaymentSpecificationMixin as Mixin,
  ThingMixin as Mixin];
