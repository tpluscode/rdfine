import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { SeriesMixin } from '../lib/Series';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';

export const CreativeWorkSeriesBundle = [
  CreativeWorkMixin as Mixin,
  SeriesMixin as Mixin,
  CreativeWorkSeriesMixin as Mixin];
