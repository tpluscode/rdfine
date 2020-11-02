import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeasonMixin } from '../CreativeWorkSeason';
import { PodcastSeasonMixin } from '../PodcastSeason';

export const PodcastSeasonBundle = [
  CreativeWorkSeasonMixin as Mixin,
  PodcastSeasonMixin as Mixin];
