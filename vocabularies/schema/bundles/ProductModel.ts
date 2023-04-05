import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProductGroupMixin } from '../lib/ProductGroup';
import { ProductMixin } from '../lib/Product';
import { ProductModelMixin } from '../lib/ProductModel';

export const ProductModelBundle = [
  ProductGroupMixin as Mixin,
  ProductMixin as Mixin,
  ProductModelMixin as Mixin];
