import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { QuantitativeValueDistributionMixin } from '../QuantitativeValueDistribution';
import { DurationMixin } from '../Duration';

export const QuantitativeValueDistributionBundle = [
  StructuredValueMixin as Mixin,
  QuantitativeValueDistributionMixin as Mixin,
  DurationMixin as Mixin];
