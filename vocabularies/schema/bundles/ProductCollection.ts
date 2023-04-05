import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionMixin } from '../lib/Collection';
import { ProductCollectionMixin } from '../lib/ProductCollection';
import { ProductMixin } from '../lib/Product';
import { TypeAndQuantityNodeMixin } from '../lib/TypeAndQuantityNode';

export const ProductCollectionBundle = [
  CollectionMixin as Mixin,
  ProductCollectionMixin as Mixin,
  ProductMixin as Mixin,
  TypeAndQuantityNodeMixin as Mixin];
