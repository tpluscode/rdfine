import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DataFeedItemMixin } from '../lib/DataFeedItem';
import { DataFeedMixin } from '../lib/DataFeed';
import { DatasetMixin } from '../lib/Dataset';
import { ThingMixin } from '../lib/Thing';

export const DataFeedBundle = [
  DataFeedItemMixin as Mixin,
  DataFeedMixin as Mixin,
  DatasetMixin as Mixin,
  ThingMixin as Mixin];
