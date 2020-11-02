import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { EngineSpecificationMixin } from '../EngineSpecification';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const EngineSpecificationBundle = [
  StructuredValueMixin as Mixin,
  EngineSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
