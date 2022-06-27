import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DeliveryEventMixin } from '../lib/DeliveryEvent';
import { IntangibleMixin } from '../lib/Intangible';
import { OrderMixin } from '../lib/Order';
import { OrganizationMixin } from '../lib/Organization';
import { ParcelDeliveryMixin } from '../lib/ParcelDelivery';
import { PersonMixin } from '../lib/Person';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { ProductMixin } from '../lib/Product';

export const ParcelDeliveryBundle = [
  DeliveryEventMixin as Mixin,
  IntangibleMixin as Mixin,
  OrderMixin as Mixin,
  OrganizationMixin as Mixin,
  ParcelDeliveryMixin as Mixin,
  PersonMixin as Mixin,
  PostalAddressMixin as Mixin,
  ProductMixin as Mixin];
