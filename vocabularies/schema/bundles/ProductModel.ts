import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProductMixin } from '../Product';
import { ProductModelMixin } from '../ProductModel';
import { ProductGroupMixin } from '../ProductGroup';

export const ProductModelBundle = [
  ProductMixin as Mixin,
  ProductModelMixin as Mixin,
  ProductGroupMixin as Mixin];
