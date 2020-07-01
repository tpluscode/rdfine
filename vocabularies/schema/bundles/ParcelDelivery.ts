import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { ParcelDeliveryMixin } from '../ParcelDelivery';
import { OrganizationMixin } from '../Organization';
import { PostalAddressMixin } from '../PostalAddress';
import { DeliveryEventMixin } from '../DeliveryEvent';
import { ProductMixin } from '../Product';
import { OrderMixin } from '../Order';
import { PersonMixin } from '../Person';

export const ParcelDeliveryBundle = [
  IntangibleMixin as Mixin,
  ParcelDeliveryMixin as Mixin,
  OrganizationMixin as Mixin,
  PostalAddressMixin as Mixin,
  DeliveryEventMixin as Mixin,
  ProductMixin as Mixin,
  OrderMixin as Mixin,
  PersonMixin as Mixin];
