import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PropertyValueMixin } from '../lib/PropertyValue';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const PropertyValueBundle = [
  PropertyValueMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  StructuredValueMixin as Mixin];
