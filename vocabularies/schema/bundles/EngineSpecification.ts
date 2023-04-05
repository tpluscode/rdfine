import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EngineSpecificationMixin } from '../lib/EngineSpecification';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const EngineSpecificationBundle = [
  EngineSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  StructuredValueMixin as Mixin];
