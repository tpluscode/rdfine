import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { PropertyValueMixin } from '../lib/PropertyValue';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const PropertyValueBundle = [
  StructuredValueMixin as Mixin,
  PropertyValueMixin as Mixin,
  QuantitativeValueMixin as Mixin];
