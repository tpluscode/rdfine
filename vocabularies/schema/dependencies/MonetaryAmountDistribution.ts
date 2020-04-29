import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { QuantitativeValueDistributionMixin } from '../QuantitativeValueDistribution';
import { MonetaryAmountDistributionMixin } from '../MonetaryAmountDistribution';

export const MonetaryAmountDistributionDependencies = [
  QuantitativeValueDistributionMixin as Mixin,
  MonetaryAmountDistributionMixin as Mixin];
