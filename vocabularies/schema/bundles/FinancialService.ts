import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialServiceMixin } from '../lib/FinancialService';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const FinancialServiceBundle = [
  FinancialServiceMixin as Mixin,
  LocalBusinessMixin as Mixin];
