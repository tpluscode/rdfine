import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DatasetMixin } from '../lib/Dataset';
import { DataFeedMixin } from '../lib/DataFeed';
import { DataFeedItemMixin } from '../lib/DataFeedItem';
import { ThingMixin } from '../lib/Thing';

export const DataFeedBundle = [
  DatasetMixin as Mixin,
  DataFeedMixin as Mixin,
  DataFeedItemMixin as Mixin,
  ThingMixin as Mixin];
