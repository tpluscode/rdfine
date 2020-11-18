import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { ShippingDeliveryTimeMixin } from '../lib/ShippingDeliveryTime';
import { OpeningHoursSpecificationMixin } from '../lib/OpeningHoursSpecification';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const ShippingDeliveryTimeBundle = [
  StructuredValueMixin as Mixin,
  ShippingDeliveryTimeMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
