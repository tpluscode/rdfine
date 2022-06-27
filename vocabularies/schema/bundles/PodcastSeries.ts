import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';
import { DataFeedMixin } from '../lib/DataFeed';
import { PersonMixin } from '../lib/Person';
import { PodcastSeriesMixin } from '../lib/PodcastSeries';

export const PodcastSeriesBundle = [
  CreativeWorkSeriesMixin as Mixin,
  DataFeedMixin as Mixin,
  PersonMixin as Mixin,
  PodcastSeriesMixin as Mixin];
