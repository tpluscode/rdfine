import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialServiceMixin } from '../lib/FinancialService';
import { AutomatedTellerMixin } from '../lib/AutomatedTeller';

export const AutomatedTellerBundle = [
  FinancialServiceMixin as Mixin,
  AutomatedTellerMixin as Mixin];
