import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomatedTellerMixin } from '../lib/AutomatedTeller';
import { FinancialServiceMixin } from '../lib/FinancialService';

export const AutomatedTellerBundle = [
  AutomatedTellerMixin as Mixin,
  FinancialServiceMixin as Mixin];
