import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProductMixin } from '../Product';
import { IndividualProductMixin } from '../IndividualProduct';

export const IndividualProductBundle = [
  ProductMixin as Mixin,
  IndividualProductMixin as Mixin];
