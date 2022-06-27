import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccountingServiceMixin } from '../lib/AccountingService';
import { FinancialServiceMixin } from '../lib/FinancialService';

export const AccountingServiceBundle = [
  AccountingServiceMixin as Mixin,
  FinancialServiceMixin as Mixin];
