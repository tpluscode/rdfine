import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { OfferShippingDetailsMixin } from '../lib/OfferShippingDetails';
import { ShippingDeliveryTimeMixin } from '../lib/ShippingDeliveryTime';
import { DefinedRegionMixin } from '../lib/DefinedRegion';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';

export const OfferShippingDetailsBundle = [
  StructuredValueMixin as Mixin,
  OfferShippingDetailsMixin as Mixin,
  ShippingDeliveryTimeMixin as Mixin,
  DefinedRegionMixin as Mixin,
  MonetaryAmountMixin as Mixin];
