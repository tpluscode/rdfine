import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { ExchangeRateSpecificationMixin } from '../ExchangeRateSpecification';
import { UnitPriceSpecificationMixin } from '../UnitPriceSpecification';
import { MonetaryAmountMixin } from '../MonetaryAmount';

export const ExchangeRateSpecificationBundle = [
  StructuredValueMixin as Mixin,
  ExchangeRateSpecificationMixin as Mixin,
  UnitPriceSpecificationMixin as Mixin,
  MonetaryAmountMixin as Mixin];
