import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeriesMixin } from '../CreativeWorkSeries';
import { PeriodicalMixin } from '../Periodical';

export const PeriodicalBundle = [
  CreativeWorkSeriesMixin as Mixin,
  PeriodicalMixin as Mixin];
