import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProductMixin } from '../lib/Product';
import { ProductModelMixin } from '../lib/ProductModel';
import { ProductGroupMixin } from '../lib/ProductGroup';

export const ProductModelBundle = [
  ProductMixin as Mixin,
  ProductModelMixin as Mixin,
  ProductGroupMixin as Mixin];
