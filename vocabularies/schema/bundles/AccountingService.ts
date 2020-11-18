import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialServiceMixin } from '../lib/FinancialService';
import { AccountingServiceMixin } from '../lib/AccountingService';

export const AccountingServiceBundle = [
  FinancialServiceMixin as Mixin,
  AccountingServiceMixin as Mixin];
