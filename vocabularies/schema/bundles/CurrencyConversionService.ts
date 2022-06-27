import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CurrencyConversionServiceMixin } from '../lib/CurrencyConversionService';
import { FinancialProductMixin } from '../lib/FinancialProduct';

export const CurrencyConversionServiceBundle = [
  CurrencyConversionServiceMixin as Mixin,
  FinancialProductMixin as Mixin];
