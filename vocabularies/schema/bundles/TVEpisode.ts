import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EpisodeMixin } from '../lib/Episode';
import { TVEpisodeMixin } from '../lib/TVEpisode';
import { CountryMixin } from '../lib/Country';
import { TVSeriesMixin } from '../lib/TVSeries';
import { LanguageMixin } from '../lib/Language';

export const TVEpisodeBundle = [
  EpisodeMixin as Mixin,
  TVEpisodeMixin as Mixin,
  CountryMixin as Mixin,
  TVSeriesMixin as Mixin,
  LanguageMixin as Mixin];
