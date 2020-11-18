import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';
import { TVSeriesMixin } from '../lib/TVSeries';
import { PersonMixin } from '../lib/Person';
import { CreativeWorkSeasonMixin } from '../lib/CreativeWorkSeason';
import { CountryMixin } from '../lib/Country';
import { EpisodeMixin } from '../lib/Episode';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { OrganizationMixin } from '../lib/Organization';
import { VideoObjectMixin } from '../lib/VideoObject';

export const TVSeriesBundle = [
  CreativeWorkMixin as Mixin,
  CreativeWorkSeriesMixin as Mixin,
  TVSeriesMixin as Mixin,
  PersonMixin as Mixin,
  CreativeWorkSeasonMixin as Mixin,
  CountryMixin as Mixin,
  EpisodeMixin as Mixin,
  MusicGroupMixin as Mixin,
  OrganizationMixin as Mixin,
  VideoObjectMixin as Mixin];
