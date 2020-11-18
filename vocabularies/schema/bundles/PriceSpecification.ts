import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const PriceSpecificationBundle = [
  StructuredValueMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
