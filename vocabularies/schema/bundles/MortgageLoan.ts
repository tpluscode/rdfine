import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LoanOrCreditMixin } from '../LoanOrCredit';
import { MortgageLoanMixin } from '../MortgageLoan';
import { MonetaryAmountMixin } from '../MonetaryAmount';

export const MortgageLoanBundle = [
  LoanOrCreditMixin as Mixin,
  MortgageLoanMixin as Mixin,
  MonetaryAmountMixin as Mixin];
