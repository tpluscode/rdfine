import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ExchangeRateSpecificationMixin } from '../lib/ExchangeRateSpecification';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { UnitPriceSpecificationMixin } from '../lib/UnitPriceSpecification';

export const ExchangeRateSpecificationBundle = [
  ExchangeRateSpecificationMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  StructuredValueMixin as Mixin,
  UnitPriceSpecificationMixin as Mixin];
