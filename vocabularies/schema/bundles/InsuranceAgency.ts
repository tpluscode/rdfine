import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialServiceMixin } from '../FinancialService';
import { InsuranceAgencyMixin } from '../InsuranceAgency';

export const InsuranceAgencyBundle = [
  FinancialServiceMixin as Mixin,
  InsuranceAgencyMixin as Mixin];
