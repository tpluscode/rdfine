import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProductGroupMixin } from '../lib/ProductGroup';
import { ProductMixin } from '../lib/Product';

export const ProductGroupBundle = [
  ProductGroupMixin as Mixin,
  ProductMixin as Mixin];
