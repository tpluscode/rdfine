import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { ShippingRateSettingsMixin } from '../lib/ShippingRateSettings';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { DeliveryChargeSpecificationMixin } from '../lib/DeliveryChargeSpecification';
import { DefinedRegionMixin } from '../lib/DefinedRegion';

export const ShippingRateSettingsBundle = [
  StructuredValueMixin as Mixin,
  ShippingRateSettingsMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  DeliveryChargeSpecificationMixin as Mixin,
  DefinedRegionMixin as Mixin];
