import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PeriodicalMixin } from '../Periodical';
import { ComicSeriesMixin } from '../ComicSeries';

export const ComicSeriesBundle = [
  PeriodicalMixin as Mixin,
  ComicSeriesMixin as Mixin];
