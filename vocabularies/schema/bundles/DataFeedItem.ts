import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DataFeedItemMixin } from '../lib/DataFeedItem';
import { IntangibleMixin } from '../lib/Intangible';
import { ThingMixin } from '../lib/Thing';

export const DataFeedItemBundle = [
  DataFeedItemMixin as Mixin,
  IntangibleMixin as Mixin,
  ThingMixin as Mixin];
