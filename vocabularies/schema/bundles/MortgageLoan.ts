import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LoanOrCreditMixin } from '../lib/LoanOrCredit';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { MortgageLoanMixin } from '../lib/MortgageLoan';

export const MortgageLoanBundle = [
  LoanOrCreditMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  MortgageLoanMixin as Mixin];
