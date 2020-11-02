import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EpisodeMixin } from '../Episode';
import { PodcastEpisodeMixin } from '../PodcastEpisode';

export const PodcastEpisodeBundle = [
  EpisodeMixin as Mixin,
  PodcastEpisodeMixin as Mixin];
