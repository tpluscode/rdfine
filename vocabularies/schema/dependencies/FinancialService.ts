import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { FinancialServiceMixin } from '../FinancialService';

export const FinancialServiceDependencies = [
  LocalBusinessMixin as Mixin,
  FinancialServiceMixin as Mixin];
