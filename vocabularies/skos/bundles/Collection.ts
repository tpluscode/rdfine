import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionMixin } from '../lib/Collection';
import { ConceptMixin } from '../lib/Concept';

export const CollectionBundle = [
  CollectionMixin as Mixin,
  ConceptMixin as Mixin];
