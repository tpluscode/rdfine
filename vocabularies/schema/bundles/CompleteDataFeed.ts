import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DataFeedMixin } from '../lib/DataFeed';
import { CompleteDataFeedMixin } from '../lib/CompleteDataFeed';

export const CompleteDataFeedBundle = [
  DataFeedMixin as Mixin,
  CompleteDataFeedMixin as Mixin];
