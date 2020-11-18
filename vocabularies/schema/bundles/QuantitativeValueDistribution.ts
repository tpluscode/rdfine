import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { QuantitativeValueDistributionMixin } from '../lib/QuantitativeValueDistribution';
import { DurationMixin } from '../lib/Duration';

export const QuantitativeValueDistributionBundle = [
  StructuredValueMixin as Mixin,
  QuantitativeValueDistributionMixin as Mixin,
  DurationMixin as Mixin];
