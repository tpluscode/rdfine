import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DataFeedMixin } from '../DataFeed';
import { CompleteDataFeedMixin } from '../CompleteDataFeed';

export const CompleteDataFeedBundle = [
  DataFeedMixin as Mixin,
  CompleteDataFeedMixin as Mixin];
