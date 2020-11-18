import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { ExchangeRateSpecificationMixin } from '../lib/ExchangeRateSpecification';
import { UnitPriceSpecificationMixin } from '../lib/UnitPriceSpecification';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';

export const ExchangeRateSpecificationBundle = [
  StructuredValueMixin as Mixin,
  ExchangeRateSpecificationMixin as Mixin,
  UnitPriceSpecificationMixin as Mixin,
  MonetaryAmountMixin as Mixin];
