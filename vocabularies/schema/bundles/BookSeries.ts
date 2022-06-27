import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BookSeriesMixin } from '../lib/BookSeries';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';

export const BookSeriesBundle = [
  BookSeriesMixin as Mixin,
  CreativeWorkSeriesMixin as Mixin];
