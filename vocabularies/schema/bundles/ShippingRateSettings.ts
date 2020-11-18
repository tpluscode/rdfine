import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { ShippingRateSettingsMixin } from '../lib/ShippingRateSettings';
import { DeliveryChargeSpecificationMixin } from '../lib/DeliveryChargeSpecification';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { DefinedRegionMixin } from '../lib/DefinedRegion';

export const ShippingRateSettingsBundle = [
  StructuredValueMixin as Mixin,
  ShippingRateSettingsMixin as Mixin,
  DeliveryChargeSpecificationMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  DefinedRegionMixin as Mixin];
