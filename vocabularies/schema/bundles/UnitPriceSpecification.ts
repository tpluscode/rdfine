import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { UnitPriceSpecificationMixin } from '../lib/UnitPriceSpecification';
import { DurationMixin } from '../lib/Duration';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const UnitPriceSpecificationBundle = [
  PriceSpecificationMixin as Mixin,
  UnitPriceSpecificationMixin as Mixin,
  DurationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
