import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { OrderItemMixin } from '../OrderItem';
import { ParcelDeliveryMixin } from '../ParcelDelivery';
import { ProductMixin } from '../Product';
import { ServiceMixin } from '../Service';

export const OrderItemBundle = [
  IntangibleMixin as Mixin,
  OrderItemMixin as Mixin,
  ParcelDeliveryMixin as Mixin,
  ProductMixin as Mixin,
  ServiceMixin as Mixin];
