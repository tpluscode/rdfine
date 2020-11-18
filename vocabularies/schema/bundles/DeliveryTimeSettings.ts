import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { DeliveryTimeSettingsMixin } from '../lib/DeliveryTimeSettings';
import { ShippingDeliveryTimeMixin } from '../lib/ShippingDeliveryTime';
import { DefinedRegionMixin } from '../lib/DefinedRegion';

export const DeliveryTimeSettingsBundle = [
  StructuredValueMixin as Mixin,
  DeliveryTimeSettingsMixin as Mixin,
  ShippingDeliveryTimeMixin as Mixin,
  DefinedRegionMixin as Mixin];
