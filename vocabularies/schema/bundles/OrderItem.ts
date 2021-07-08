import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { OrderItemMixin } from '../lib/OrderItem';
import { ParcelDeliveryMixin } from '../lib/ParcelDelivery';
import { ServiceMixin } from '../lib/Service';
import { ProductMixin } from '../lib/Product';

export const OrderItemBundle = [
  IntangibleMixin as Mixin,
  OrderItemMixin as Mixin,
  ParcelDeliveryMixin as Mixin,
  ServiceMixin as Mixin,
  ProductMixin as Mixin];
