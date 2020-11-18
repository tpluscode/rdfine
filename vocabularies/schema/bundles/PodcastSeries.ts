import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';
import { PodcastSeriesMixin } from '../lib/PodcastSeries';
import { DataFeedMixin } from '../lib/DataFeed';

export const PodcastSeriesBundle = [
  CreativeWorkSeriesMixin as Mixin,
  PodcastSeriesMixin as Mixin,
  DataFeedMixin as Mixin];
