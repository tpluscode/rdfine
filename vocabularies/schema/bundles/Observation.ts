import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { ObservationMixin } from '../lib/Observation';
import { PropertyMixin } from '../lib/Property';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { StatisticalPopulationMixin } from '../lib/StatisticalPopulation';

export const ObservationBundle = [
  IntangibleMixin as Mixin,
  ObservationMixin as Mixin,
  PropertyMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  StatisticalPopulationMixin as Mixin];
