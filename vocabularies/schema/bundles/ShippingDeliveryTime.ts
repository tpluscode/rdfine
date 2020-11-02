import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { ShippingDeliveryTimeMixin } from '../ShippingDeliveryTime';
import { OpeningHoursSpecificationMixin } from '../OpeningHoursSpecification';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const ShippingDeliveryTimeBundle = [
  StructuredValueMixin as Mixin,
  ShippingDeliveryTimeMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
