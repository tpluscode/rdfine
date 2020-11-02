import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { CollectionMixin } from '../Collection';

export const CollectionBundle = [
  CreativeWorkMixin as Mixin,
  CollectionMixin as Mixin];
