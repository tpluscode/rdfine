import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeriesMixin } from '../CreativeWorkSeries';
import { BookSeriesMixin } from '../BookSeries';

export const BookSeriesBundle = [
  CreativeWorkSeriesMixin as Mixin,
  BookSeriesMixin as Mixin];
