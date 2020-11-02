import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { OfferShippingDetailsMixin } from '../OfferShippingDetails';
import { ShippingDeliveryTimeMixin } from '../ShippingDeliveryTime';
import { DefinedRegionMixin } from '../DefinedRegion';
import { MonetaryAmountMixin } from '../MonetaryAmount';

export const OfferShippingDetailsBundle = [
  StructuredValueMixin as Mixin,
  OfferShippingDetailsMixin as Mixin,
  ShippingDeliveryTimeMixin as Mixin,
  DefinedRegionMixin as Mixin,
  MonetaryAmountMixin as Mixin];
