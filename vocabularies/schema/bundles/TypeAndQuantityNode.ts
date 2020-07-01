import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { TypeAndQuantityNodeMixin } from '../TypeAndQuantityNode';
import { ProductMixin } from '../Product';
import { ServiceMixin } from '../Service';

export const TypeAndQuantityNodeBundle = [
  StructuredValueMixin as Mixin,
  TypeAndQuantityNodeMixin as Mixin,
  ProductMixin as Mixin,
  ServiceMixin as Mixin];
