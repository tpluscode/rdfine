import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { StatisticalPopulationMixin } from '../StatisticalPopulation';

export const StatisticalPopulationBundle = [
  IntangibleMixin as Mixin,
  StatisticalPopulationMixin as Mixin];
