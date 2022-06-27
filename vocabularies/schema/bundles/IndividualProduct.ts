import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IndividualProductMixin } from '../lib/IndividualProduct';
import { ProductMixin } from '../lib/Product';

export const IndividualProductBundle = [
  IndividualProductMixin as Mixin,
  ProductMixin as Mixin];
