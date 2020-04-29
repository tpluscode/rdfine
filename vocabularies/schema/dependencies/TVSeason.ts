import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { CreativeWorkSeasonMixin } from '../CreativeWorkSeason';
import { TVSeasonMixin } from '../TVSeason';
import { CountryMixin } from '../Country';
import { TVSeriesMixin } from '../TVSeries';

export const TVSeasonDependencies = [
  CreativeWorkMixin as Mixin,
  CreativeWorkSeasonMixin as Mixin,
  TVSeasonMixin as Mixin,
  CountryMixin as Mixin,
  TVSeriesMixin as Mixin];
