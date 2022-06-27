import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DurationMixin } from '../lib/Duration';
import { QuantitativeValueDistributionMixin } from '../lib/QuantitativeValueDistribution';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const QuantitativeValueDistributionBundle = [
  DurationMixin as Mixin,
  QuantitativeValueDistributionMixin as Mixin,
  StructuredValueMixin as Mixin];
