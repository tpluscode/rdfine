import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EpisodeMixin } from '../Episode';
import { TVEpisodeMixin } from '../TVEpisode';
import { CountryMixin } from '../Country';
import { TVSeriesMixin } from '../TVSeries';

export const TVEpisodeBundle = [
  EpisodeMixin as Mixin,
  TVEpisodeMixin as Mixin,
  CountryMixin as Mixin,
  TVSeriesMixin as Mixin];
