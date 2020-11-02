import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionMixin } from '../Collection';
import { ProductMixin } from '../Product';
import { ProductCollectionMixin } from '../ProductCollection';
import { TypeAndQuantityNodeMixin } from '../TypeAndQuantityNode';

export const ProductCollectionBundle = [
  CollectionMixin as Mixin,
  ProductMixin as Mixin,
  ProductCollectionMixin as Mixin,
  TypeAndQuantityNodeMixin as Mixin];
