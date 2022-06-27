import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DefinedRegionMixin } from '../lib/DefinedRegion';
import { DeliveryTimeSettingsMixin } from '../lib/DeliveryTimeSettings';
import { ShippingDeliveryTimeMixin } from '../lib/ShippingDeliveryTime';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const DeliveryTimeSettingsBundle = [
  DefinedRegionMixin as Mixin,
  DeliveryTimeSettingsMixin as Mixin,
  ShippingDeliveryTimeMixin as Mixin,
  StructuredValueMixin as Mixin];
