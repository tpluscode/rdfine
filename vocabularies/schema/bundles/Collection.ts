import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { CollectionMixin } from '../lib/Collection';

export const CollectionBundle = [
  CreativeWorkMixin as Mixin,
  CollectionMixin as Mixin];
