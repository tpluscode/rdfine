import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionMixin } from '../lib/Collection';
import { OrderedCollectionMixin } from '../lib/OrderedCollection';

export const OrderedCollectionBundle = [
  CollectionMixin as Mixin,
  OrderedCollectionMixin as Mixin];
