import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConceptMixin } from '../lib/Concept';
import { ThingMixin } from '../lib/Thing';

export const ConceptBundle = [
  ConceptMixin as Mixin,
  ThingMixin as Mixin];
