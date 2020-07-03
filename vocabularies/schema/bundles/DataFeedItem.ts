import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { DataFeedItemMixin } from '../DataFeedItem';
import { ThingMixin } from '../Thing';

export const DataFeedItemBundle = [
  IntangibleMixin as Mixin,
  DataFeedItemMixin as Mixin,
  ThingMixin as Mixin];
