import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MonetaryAmountDistributionMixin } from '../lib/MonetaryAmountDistribution';
import { QuantitativeValueDistributionMixin } from '../lib/QuantitativeValueDistribution';

export const MonetaryAmountDistributionBundle = [
  MonetaryAmountDistributionMixin as Mixin,
  QuantitativeValueDistributionMixin as Mixin];
