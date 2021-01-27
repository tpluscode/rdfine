import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DerivationMixin } from '../lib/Derivation';
import { QuotationMixin } from '../lib/Quotation';

export const QuotationBundle = [
  DerivationMixin as Mixin,
  QuotationMixin as Mixin];
