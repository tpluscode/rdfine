import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProductMixin } from '../Product';
import { ProductGroupMixin } from '../ProductGroup';

export const ProductGroupBundle = [
  ProductMixin as Mixin,
  ProductGroupMixin as Mixin];
