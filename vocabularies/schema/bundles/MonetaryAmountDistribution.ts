import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { QuantitativeValueDistributionMixin } from '../lib/QuantitativeValueDistribution';
import { MonetaryAmountDistributionMixin } from '../lib/MonetaryAmountDistribution';

export const MonetaryAmountDistributionBundle = [
  QuantitativeValueDistributionMixin as Mixin,
  MonetaryAmountDistributionMixin as Mixin];
