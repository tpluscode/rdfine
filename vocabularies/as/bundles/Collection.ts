import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectMixin } from '../lib/Object';
import { OrderedItemsMixin } from '../lib/OrderedItems';
import { CollectionMixin } from '../lib/Collection';
import { CollectionPageMixin } from '../lib/CollectionPage';
import { LinkMixin } from '../lib/Link';

export const CollectionBundle = [
  ObjectMixin as Mixin,
  OrderedItemsMixin as Mixin,
  CollectionMixin as Mixin,
  CollectionPageMixin as Mixin,
  LinkMixin as Mixin];
