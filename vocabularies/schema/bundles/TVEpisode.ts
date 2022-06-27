import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CountryMixin } from '../lib/Country';
import { EpisodeMixin } from '../lib/Episode';
import { LanguageMixin } from '../lib/Language';
import { TVEpisodeMixin } from '../lib/TVEpisode';
import { TVSeriesMixin } from '../lib/TVSeries';

export const TVEpisodeBundle = [
  CountryMixin as Mixin,
  EpisodeMixin as Mixin,
  LanguageMixin as Mixin,
  TVEpisodeMixin as Mixin,
  TVSeriesMixin as Mixin];
