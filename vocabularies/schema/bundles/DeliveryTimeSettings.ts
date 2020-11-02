import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { DeliveryTimeSettingsMixin } from '../DeliveryTimeSettings';
import { ShippingDeliveryTimeMixin } from '../ShippingDeliveryTime';
import { DefinedRegionMixin } from '../DefinedRegion';

export const DeliveryTimeSettingsBundle = [
  StructuredValueMixin as Mixin,
  DeliveryTimeSettingsMixin as Mixin,
  ShippingDeliveryTimeMixin as Mixin,
  DefinedRegionMixin as Mixin];
