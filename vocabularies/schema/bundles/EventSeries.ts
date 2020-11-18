import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { SeriesMixin } from '../lib/Series';
import { EventSeriesMixin } from '../lib/EventSeries';

export const EventSeriesBundle = [
  EventMixin as Mixin,
  SeriesMixin as Mixin,
  EventSeriesMixin as Mixin];
