import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProductMixin } from '../lib/Product';
import { ProductGroupMixin } from '../lib/ProductGroup';

export const ProductGroupBundle = [
  ProductMixin as Mixin,
  ProductGroupMixin as Mixin];
