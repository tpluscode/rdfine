import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { OrderMixin } from '../Order';
import { OfferMixin } from '../Offer';
import { PostalAddressMixin } from '../PostalAddress';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { ParcelDeliveryMixin } from '../ParcelDelivery';
import { OrderItemMixin } from '../OrderItem';
import { ProductMixin } from '../Product';
import { ServiceMixin } from '../Service';
import { InvoiceMixin } from '../Invoice';

export const OrderDependencies = [
  IntangibleMixin as Mixin,
  OrderMixin as Mixin,
  OfferMixin as Mixin,
  PostalAddressMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ParcelDeliveryMixin as Mixin,
  OrderItemMixin as Mixin,
  ProductMixin as Mixin,
  ServiceMixin as Mixin,
  InvoiceMixin as Mixin];
