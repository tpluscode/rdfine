import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { EventSeriesMixin } from '../lib/EventSeries';
import { SeriesMixin } from '../lib/Series';

export const EventSeriesBundle = [
  EventMixin as Mixin,
  EventSeriesMixin as Mixin,
  SeriesMixin as Mixin];
