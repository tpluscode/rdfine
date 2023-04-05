import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const PriceSpecificationBundle = [
  PriceSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  StructuredValueMixin as Mixin];
