import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { OrderMixin } from '../lib/Order';
import { OfferMixin } from '../lib/Offer';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { ParcelDeliveryMixin } from '../lib/ParcelDelivery';
import { ServiceMixin } from '../lib/Service';
import { ProductMixin } from '../lib/Product';
import { OrderItemMixin } from '../lib/OrderItem';
import { InvoiceMixin } from '../lib/Invoice';

export const OrderBundle = [
  IntangibleMixin as Mixin,
  OrderMixin as Mixin,
  OfferMixin as Mixin,
  PostalAddressMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ParcelDeliveryMixin as Mixin,
  ServiceMixin as Mixin,
  ProductMixin as Mixin,
  OrderItemMixin as Mixin,
  InvoiceMixin as Mixin];
