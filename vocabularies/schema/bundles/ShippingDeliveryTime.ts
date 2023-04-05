import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OpeningHoursSpecificationMixin } from '../lib/OpeningHoursSpecification';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { ShippingDeliveryTimeMixin } from '../lib/ShippingDeliveryTime';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const ShippingDeliveryTimeBundle = [
  OpeningHoursSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  ShippingDeliveryTimeMixin as Mixin,
  StructuredValueMixin as Mixin];
