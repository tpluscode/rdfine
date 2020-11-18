import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { EngineSpecificationMixin } from '../lib/EngineSpecification';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const EngineSpecificationBundle = [
  StructuredValueMixin as Mixin,
  EngineSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
