import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { EngineSpecificationMixin } from '../EngineSpecification';

export const EngineSpecificationDependencies = [
  StructuredValueMixin as Mixin,
  EngineSpecificationMixin as Mixin];
