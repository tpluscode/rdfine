import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LoanOrCreditMixin } from '../lib/LoanOrCredit';
import { MortgageLoanMixin } from '../lib/MortgageLoan';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';

export const MortgageLoanBundle = [
  LoanOrCreditMixin as Mixin,
  MortgageLoanMixin as Mixin,
  MonetaryAmountMixin as Mixin];
