import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DatasetMixin } from '../lib/Dataset';
import { DataFeedMixin } from '../lib/DataFeed';
import { ThingMixin } from '../lib/Thing';
import { DataFeedItemMixin } from '../lib/DataFeedItem';

export const DataFeedBundle = [
  DatasetMixin as Mixin,
  DataFeedMixin as Mixin,
  ThingMixin as Mixin,
  DataFeedItemMixin as Mixin];
