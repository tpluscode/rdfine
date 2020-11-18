import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { BroadcastFrequencySpecificationMixin } from '../lib/BroadcastFrequencySpecification';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const BroadcastFrequencySpecificationBundle = [
  IntangibleMixin as Mixin,
  BroadcastFrequencySpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
