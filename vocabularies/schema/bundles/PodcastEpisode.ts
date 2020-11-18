import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EpisodeMixin } from '../lib/Episode';
import { PodcastEpisodeMixin } from '../lib/PodcastEpisode';

export const PodcastEpisodeBundle = [
  EpisodeMixin as Mixin,
  PodcastEpisodeMixin as Mixin];
