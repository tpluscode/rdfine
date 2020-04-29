import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { DataFeedItemMixin } from '../DataFeedItem';
import { ThingMixin } from '../Thing';

export const DataFeedItemDependencies = [
  IntangibleMixin as Mixin,
  DataFeedItemMixin as Mixin,
  ThingMixin as Mixin];
