import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { QuantitativeValueDistributionMixin } from '../QuantitativeValueDistribution';
import { DurationMixin } from '../Duration';

export const QuantitativeValueDistributionDependencies = [
  StructuredValueMixin as Mixin,
  QuantitativeValueDistributionMixin as Mixin,
  DurationMixin as Mixin];
