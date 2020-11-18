import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProductMixin } from '../lib/Product';
import { IndividualProductMixin } from '../lib/IndividualProduct';

export const IndividualProductBundle = [
  ProductMixin as Mixin,
  IndividualProductMixin as Mixin];
