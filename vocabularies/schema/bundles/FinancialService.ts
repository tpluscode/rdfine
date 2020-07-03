import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { FinancialServiceMixin } from '../FinancialService';

export const FinancialServiceBundle = [
  LocalBusinessMixin as Mixin,
  FinancialServiceMixin as Mixin];
