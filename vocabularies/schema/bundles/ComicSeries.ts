import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ComicSeriesMixin } from '../lib/ComicSeries';
import { PeriodicalMixin } from '../lib/Periodical';

export const ComicSeriesBundle = [
  ComicSeriesMixin as Mixin,
  PeriodicalMixin as Mixin];
