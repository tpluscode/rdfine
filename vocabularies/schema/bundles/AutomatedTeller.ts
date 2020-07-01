import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialServiceMixin } from '../FinancialService';
import { AutomatedTellerMixin } from '../AutomatedTeller';

export const AutomatedTellerBundle = [
  FinancialServiceMixin as Mixin,
  AutomatedTellerMixin as Mixin];
