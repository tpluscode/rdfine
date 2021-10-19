import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';
import { PodcastSeriesMixin } from '../lib/PodcastSeries';
import { PersonMixin } from '../lib/Person';
import { DataFeedMixin } from '../lib/DataFeed';

export const PodcastSeriesBundle = [
  CreativeWorkSeriesMixin as Mixin,
  PodcastSeriesMixin as Mixin,
  PersonMixin as Mixin,
  DataFeedMixin as Mixin];
