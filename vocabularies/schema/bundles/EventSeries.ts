import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { SeriesMixin } from '../Series';
import { EventSeriesMixin } from '../EventSeries';

export const EventSeriesBundle = [
  EventMixin as Mixin,
  SeriesMixin as Mixin,
  EventSeriesMixin as Mixin];
