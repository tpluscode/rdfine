import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeriesMixin } from '../CreativeWorkSeries';
import { PodcastSeriesMixin } from '../PodcastSeries';
import { DataFeedMixin } from '../DataFeed';

export const PodcastSeriesBundle = [
  CreativeWorkSeriesMixin as Mixin,
  PodcastSeriesMixin as Mixin,
  DataFeedMixin as Mixin];
