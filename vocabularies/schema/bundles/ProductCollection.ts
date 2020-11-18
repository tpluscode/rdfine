import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionMixin } from '../lib/Collection';
import { ProductMixin } from '../lib/Product';
import { ProductCollectionMixin } from '../lib/ProductCollection';
import { TypeAndQuantityNodeMixin } from '../lib/TypeAndQuantityNode';

export const ProductCollectionBundle = [
  CollectionMixin as Mixin,
  ProductMixin as Mixin,
  ProductCollectionMixin as Mixin,
  TypeAndQuantityNodeMixin as Mixin];
