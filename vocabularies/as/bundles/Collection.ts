import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionMixin } from '../lib/Collection';
import { CollectionPageMixin } from '../lib/CollectionPage';
import { LinkMixin } from '../lib/Link';
import { ObjectMixin } from '../lib/Object';
import { OrderedItemsMixin } from '../lib/OrderedItems';

export const CollectionBundle = [
  CollectionMixin as Mixin,
  CollectionPageMixin as Mixin,
  LinkMixin as Mixin,
  ObjectMixin as Mixin,
  OrderedItemsMixin as Mixin];
