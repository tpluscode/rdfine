import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { DataFeedItemMixin } from '../lib/DataFeedItem';
import { ThingMixin } from '../lib/Thing';

export const DataFeedItemBundle = [
  IntangibleMixin as Mixin,
  DataFeedItemMixin as Mixin,
  ThingMixin as Mixin];
