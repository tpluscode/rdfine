import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';
import { PeriodicalMixin } from '../lib/Periodical';

export const PeriodicalBundle = [
  CreativeWorkSeriesMixin as Mixin,
  PeriodicalMixin as Mixin];
