import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { ShippingRateSettingsMixin } from '../ShippingRateSettings';
import { DeliveryChargeSpecificationMixin } from '../DeliveryChargeSpecification';
import { MonetaryAmountMixin } from '../MonetaryAmount';
import { DefinedRegionMixin } from '../DefinedRegion';

export const ShippingRateSettingsBundle = [
  StructuredValueMixin as Mixin,
  ShippingRateSettingsMixin as Mixin,
  DeliveryChargeSpecificationMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  DefinedRegionMixin as Mixin];
