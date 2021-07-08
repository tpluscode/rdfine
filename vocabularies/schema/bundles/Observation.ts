import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { ObservationMixin } from '../lib/Observation';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { PropertyMixin } from '../lib/Property';
import { StatisticalPopulationMixin } from '../lib/StatisticalPopulation';

export const ObservationBundle = [
  IntangibleMixin as Mixin,
  ObservationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  PropertyMixin as Mixin,
  StatisticalPopulationMixin as Mixin];
