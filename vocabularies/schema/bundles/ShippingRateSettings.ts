import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DefinedRegionMixin } from '../lib/DefinedRegion';
import { DeliveryChargeSpecificationMixin } from '../lib/DeliveryChargeSpecification';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { ShippingRateSettingsMixin } from '../lib/ShippingRateSettings';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const ShippingRateSettingsBundle = [
  DefinedRegionMixin as Mixin,
  DeliveryChargeSpecificationMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  ShippingRateSettingsMixin as Mixin,
  StructuredValueMixin as Mixin];
