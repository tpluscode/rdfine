import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DurationMixin } from '../lib/Duration';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { UnitPriceSpecificationMixin } from '../lib/UnitPriceSpecification';

export const UnitPriceSpecificationBundle = [
  DurationMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  UnitPriceSpecificationMixin as Mixin];
