import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConceptMixin } from '../lib/Concept';
import { ConceptSchemeMixin } from '../lib/ConceptScheme';

export const ConceptBundle = [
  ConceptMixin as Mixin,
  ConceptSchemeMixin as Mixin];
