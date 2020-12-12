import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConceptMixin } from '../lib/Concept';
import { ConceptSchemeMixin } from '../lib/ConceptScheme';

export const ConceptSchemeBundle = [
  ConceptMixin as Mixin,
  ConceptSchemeMixin as Mixin];
