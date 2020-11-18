import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PeriodicalMixin } from '../lib/Periodical';
import { ComicSeriesMixin } from '../lib/ComicSeries';

export const ComicSeriesBundle = [
  PeriodicalMixin as Mixin,
  ComicSeriesMixin as Mixin];
