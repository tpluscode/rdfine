import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DefinedRegionMixin } from '../lib/DefinedRegion';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { OfferShippingDetailsMixin } from '../lib/OfferShippingDetails';
import { ShippingDeliveryTimeMixin } from '../lib/ShippingDeliveryTime';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const OfferShippingDetailsBundle = [
  DefinedRegionMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  OfferShippingDetailsMixin as Mixin,
  ShippingDeliveryTimeMixin as Mixin,
  StructuredValueMixin as Mixin];
