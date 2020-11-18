import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { TypeAndQuantityNodeMixin } from '../lib/TypeAndQuantityNode';
import { ProductMixin } from '../lib/Product';
import { ServiceMixin } from '../lib/Service';

export const TypeAndQuantityNodeBundle = [
  StructuredValueMixin as Mixin,
  TypeAndQuantityNodeMixin as Mixin,
  ProductMixin as Mixin,
  ServiceMixin as Mixin];
