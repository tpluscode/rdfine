import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EpisodeMixin } from '../Episode';
import { RadioEpisodeMixin } from '../RadioEpisode';

export const RadioEpisodeBundle = [
  EpisodeMixin as Mixin,
  RadioEpisodeMixin as Mixin];
