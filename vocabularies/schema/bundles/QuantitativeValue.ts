import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { PropertyValueMixin } from '../lib/PropertyValue';

export const QuantitativeValueBundle = [
  StructuredValueMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  PropertyValueMixin as Mixin];
