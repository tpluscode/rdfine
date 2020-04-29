import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { PropertyValueMixin } from '../PropertyValue';

export const QuantitativeValueDependencies = [
  StructuredValueMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  PropertyValueMixin as Mixin];
