import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { PropertyValueMixin } from '../PropertyValue';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const PropertyValueDependencies = [
  StructuredValueMixin as Mixin,
  PropertyValueMixin as Mixin,
  QuantitativeValueMixin as Mixin];
