import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { SeriesMixin } from '../Series';
import { CreativeWorkSeriesMixin } from '../CreativeWorkSeries';

export const CreativeWorkSeriesBundle = [
  CreativeWorkMixin as Mixin,
  SeriesMixin as Mixin,
  CreativeWorkSeriesMixin as Mixin];
