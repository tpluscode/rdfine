import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { UnitPriceSpecificationMixin } from '../lib/UnitPriceSpecification';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const UnitPriceSpecificationBundle = [
  PriceSpecificationMixin as Mixin,
  UnitPriceSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
