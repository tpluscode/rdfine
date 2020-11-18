import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EpisodeMixin } from '../lib/Episode';
import { RadioEpisodeMixin } from '../lib/RadioEpisode';

export const RadioEpisodeBundle = [
  EpisodeMixin as Mixin,
  RadioEpisodeMixin as Mixin];
