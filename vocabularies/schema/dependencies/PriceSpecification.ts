import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { PriceSpecificationMixin } from '../PriceSpecification';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const PriceSpecificationDependencies = [
  StructuredValueMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
