import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CompleteDataFeedMixin } from '../lib/CompleteDataFeed';
import { DataFeedMixin } from '../lib/DataFeed';

export const CompleteDataFeedBundle = [
  CompleteDataFeedMixin as Mixin,
  DataFeedMixin as Mixin];
