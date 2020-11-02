import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { ObservationMixin } from '../Observation';
import { PropertyMixin } from '../Property';
import { StatisticalPopulationMixin } from '../StatisticalPopulation';

export const ObservationBundle = [
  IntangibleMixin as Mixin,
  ObservationMixin as Mixin,
  PropertyMixin as Mixin,
  StatisticalPopulationMixin as Mixin];
