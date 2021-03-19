import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionMixin } from '../lib/Collection';
import { CollectionPageMixin } from '../lib/CollectionPage';
import { LinkMixin } from '../lib/Link';

export const CollectionPageBundle = [
  CollectionMixin as Mixin,
  CollectionPageMixin as Mixin,
  LinkMixin as Mixin];
