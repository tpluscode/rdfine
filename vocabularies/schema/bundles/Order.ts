import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { InvoiceMixin } from '../lib/Invoice';
import { OfferMixin } from '../lib/Offer';
import { OrderItemMixin } from '../lib/OrderItem';
import { OrderMixin } from '../lib/Order';
import { OrganizationMixin } from '../lib/Organization';
import { ParcelDeliveryMixin } from '../lib/ParcelDelivery';
import { PersonMixin } from '../lib/Person';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { ProductMixin } from '../lib/Product';
import { ServiceMixin } from '../lib/Service';

export const OrderBundle = [
  IntangibleMixin as Mixin,
  InvoiceMixin as Mixin,
  OfferMixin as Mixin,
  OrderItemMixin as Mixin,
  OrderMixin as Mixin,
  OrganizationMixin as Mixin,
  ParcelDeliveryMixin as Mixin,
  PersonMixin as Mixin,
  PostalAddressMixin as Mixin,
  ProductMixin as Mixin,
  ServiceMixin as Mixin];
