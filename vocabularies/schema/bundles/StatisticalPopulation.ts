import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { StatisticalPopulationMixin } from '../lib/StatisticalPopulation';

export const StatisticalPopulationBundle = [
  IntangibleMixin as Mixin,
  StatisticalPopulationMixin as Mixin];
