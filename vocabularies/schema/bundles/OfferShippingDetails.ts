import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DefinedRegionMixin } from '../lib/DefinedRegion.js';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount.js';
import { OfferShippingDetailsMixin } from '../lib/OfferShippingDetails.js';
import { ShippingDeliveryTimeMixin } from '../lib/ShippingDeliveryTime.js';
import { StructuredValueMixin } from '../lib/StructuredValue.js';

export const OfferShippingDetailsBundle = [
  DefinedRegionMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  OfferShippingDetailsMixin as Mixin,
  ShippingDeliveryTimeMixin as Mixin,
  StructuredValueMixin as Mixin];
