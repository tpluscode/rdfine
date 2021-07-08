import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { TypeAndQuantityNodeMixin } from '../lib/TypeAndQuantityNode';
import { ServiceMixin } from '../lib/Service';
import { ProductMixin } from '../lib/Product';

export const TypeAndQuantityNodeBundle = [
  StructuredValueMixin as Mixin,
  TypeAndQuantityNodeMixin as Mixin,
  ServiceMixin as Mixin,
  ProductMixin as Mixin];
