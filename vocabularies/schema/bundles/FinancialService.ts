import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { FinancialServiceMixin } from '../lib/FinancialService';

export const FinancialServiceBundle = [
  LocalBusinessMixin as Mixin,
  FinancialServiceMixin as Mixin];
