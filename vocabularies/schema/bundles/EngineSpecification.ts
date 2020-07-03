import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { EngineSpecificationMixin } from '../EngineSpecification';

export const EngineSpecificationBundle = [
  StructuredValueMixin as Mixin,
  EngineSpecificationMixin as Mixin];
