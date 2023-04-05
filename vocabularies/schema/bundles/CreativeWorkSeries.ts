import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';
import { SeriesMixin } from '../lib/Series';

export const CreativeWorkSeriesBundle = [
  CreativeWorkMixin as Mixin,
  CreativeWorkSeriesMixin as Mixin,
  SeriesMixin as Mixin];
