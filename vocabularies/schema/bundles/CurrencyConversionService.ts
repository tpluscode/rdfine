import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialProductMixin } from '../lib/FinancialProduct';
import { CurrencyConversionServiceMixin } from '../lib/CurrencyConversionService';

export const CurrencyConversionServiceBundle = [
  FinancialProductMixin as Mixin,
  CurrencyConversionServiceMixin as Mixin];
