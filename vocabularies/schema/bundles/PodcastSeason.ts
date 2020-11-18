import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeasonMixin } from '../lib/CreativeWorkSeason';
import { PodcastSeasonMixin } from '../lib/PodcastSeason';

export const PodcastSeasonBundle = [
  CreativeWorkSeasonMixin as Mixin,
  PodcastSeasonMixin as Mixin];
