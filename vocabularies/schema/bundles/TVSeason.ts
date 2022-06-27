import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CountryMixin } from '../lib/Country';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { CreativeWorkSeasonMixin } from '../lib/CreativeWorkSeason';
import { TVSeasonMixin } from '../lib/TVSeason';
import { TVSeriesMixin } from '../lib/TVSeries';

export const TVSeasonBundle = [
  CountryMixin as Mixin,
  CreativeWorkMixin as Mixin,
  CreativeWorkSeasonMixin as Mixin,
  TVSeasonMixin as Mixin,
  TVSeriesMixin as Mixin];
