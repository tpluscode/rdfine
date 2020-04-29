import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DatasetMixin } from '../Dataset';
import { DataFeedMixin } from '../DataFeed';
import { DataFeedItemMixin } from '../DataFeedItem';
import { ThingMixin } from '../Thing';

export const DataFeedDependencies = [
  DatasetMixin as Mixin,
  DataFeedMixin as Mixin,
  DataFeedItemMixin as Mixin,
  ThingMixin as Mixin];
