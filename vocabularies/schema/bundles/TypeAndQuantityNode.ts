import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProductMixin } from '../lib/Product';
import { ServiceMixin } from '../lib/Service';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { TypeAndQuantityNodeMixin } from '../lib/TypeAndQuantityNode';

export const TypeAndQuantityNodeBundle = [
  ProductMixin as Mixin,
  ServiceMixin as Mixin,
  StructuredValueMixin as Mixin,
  TypeAndQuantityNodeMixin as Mixin];
