import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProductMixin } from '../Product';
import { ProductModelMixin } from '../ProductModel';

export const ProductModelDependencies = [
  ProductMixin as Mixin,
  ProductModelMixin as Mixin];
