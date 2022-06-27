import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { OrderItemMixin } from '../lib/OrderItem';
import { ParcelDeliveryMixin } from '../lib/ParcelDelivery';
import { ProductMixin } from '../lib/Product';
import { ServiceMixin } from '../lib/Service';

export const OrderItemBundle = [
  IntangibleMixin as Mixin,
  OrderItemMixin as Mixin,
  ParcelDeliveryMixin as Mixin,
  ProductMixin as Mixin,
  ServiceMixin as Mixin];
