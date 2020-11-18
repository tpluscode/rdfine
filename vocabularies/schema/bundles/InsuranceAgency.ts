import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialServiceMixin } from '../lib/FinancialService';
import { InsuranceAgencyMixin } from '../lib/InsuranceAgency';

export const InsuranceAgencyBundle = [
  FinancialServiceMixin as Mixin,
  InsuranceAgencyMixin as Mixin];
