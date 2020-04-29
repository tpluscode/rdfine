import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { BroadcastFrequencySpecificationMixin } from '../BroadcastFrequencySpecification';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const BroadcastFrequencySpecificationDependencies = [
  IntangibleMixin as Mixin,
  BroadcastFrequencySpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
