import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { CreativeWorkSeasonMixin } from '../lib/CreativeWorkSeason';
import { TVSeasonMixin } from '../lib/TVSeason';
import { CountryMixin } from '../lib/Country';
import { TVSeriesMixin } from '../lib/TVSeries';

export const TVSeasonBundle = [
  CreativeWorkMixin as Mixin,
  CreativeWorkSeasonMixin as Mixin,
  TVSeasonMixin as Mixin,
  CountryMixin as Mixin,
  TVSeriesMixin as Mixin];
