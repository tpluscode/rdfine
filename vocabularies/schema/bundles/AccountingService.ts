import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialServiceMixin } from '../FinancialService';
import { AccountingServiceMixin } from '../AccountingService';

export const AccountingServiceBundle = [
  FinancialServiceMixin as Mixin,
  AccountingServiceMixin as Mixin];
