import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';
import { BookSeriesMixin } from '../lib/BookSeries';

export const BookSeriesBundle = [
  CreativeWorkSeriesMixin as Mixin,
  BookSeriesMixin as Mixin];
