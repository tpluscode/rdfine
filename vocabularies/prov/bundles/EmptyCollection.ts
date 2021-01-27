import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionMixin } from '../lib/Collection';
import { EmptyCollectionMixin } from '../lib/EmptyCollection';

export const EmptyCollectionBundle = [
  CollectionMixin as Mixin,
  EmptyCollectionMixin as Mixin];
