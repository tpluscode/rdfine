import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionMixin } from '../lib/Collection';
import { CreativeWorkMixin } from '../lib/CreativeWork';

export const CollectionBundle = [
  CollectionMixin as Mixin,
  CreativeWorkMixin as Mixin];
