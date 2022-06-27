import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BroadcastFrequencySpecificationMixin } from '../lib/BroadcastFrequencySpecification';
import { IntangibleMixin } from '../lib/Intangible';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const BroadcastFrequencySpecificationBundle = [
  BroadcastFrequencySpecificationMixin as Mixin,
  IntangibleMixin as Mixin,
  QuantitativeValueMixin as Mixin];
