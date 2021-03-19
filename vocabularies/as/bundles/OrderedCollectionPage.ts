import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionPageMixin } from '../lib/CollectionPage';
import { OrderedCollectionMixin } from '../lib/OrderedCollection';
import { OrderedCollectionPageMixin } from '../lib/OrderedCollectionPage';

export const OrderedCollectionPageBundle = [
  CollectionPageMixin as Mixin,
  OrderedCollectionMixin as Mixin,
  OrderedCollectionPageMixin as Mixin];
