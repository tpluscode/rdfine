import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialServiceMixin } from '../FinancialService';
import { InsuranceAgencyMixin } from '../InsuranceAgency';

export const InsuranceAgencyDependencies = [
  FinancialServiceMixin as Mixin,
  InsuranceAgencyMixin as Mixin];
