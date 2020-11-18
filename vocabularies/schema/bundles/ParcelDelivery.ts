import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { ParcelDeliveryMixin } from '../lib/ParcelDelivery';
import { OrganizationMixin } from '../lib/Organization';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { DeliveryEventMixin } from '../lib/DeliveryEvent';
import { ProductMixin } from '../lib/Product';
import { OrderMixin } from '../lib/Order';
import { PersonMixin } from '../lib/Person';

export const ParcelDeliveryBundle = [
  IntangibleMixin as Mixin,
  ParcelDeliveryMixin as Mixin,
  OrganizationMixin as Mixin,
  PostalAddressMixin as Mixin,
  DeliveryEventMixin as Mixin,
  ProductMixin as Mixin,
  OrderMixin as Mixin,
  PersonMixin as Mixin];
