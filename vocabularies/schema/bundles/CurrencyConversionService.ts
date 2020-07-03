import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FinancialProductMixin } from '../FinancialProduct';
import { CurrencyConversionServiceMixin } from '../CurrencyConversionService';

export const CurrencyConversionServiceBundle = [
  FinancialProductMixin as Mixin,
  CurrencyConversionServiceMixin as Mixin];
