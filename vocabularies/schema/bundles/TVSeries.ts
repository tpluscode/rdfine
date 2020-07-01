import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { CreativeWorkSeriesMixin } from '../CreativeWorkSeries';
import { TVSeriesMixin } from '../TVSeries';
import { PersonMixin } from '../Person';
import { CreativeWorkSeasonMixin } from '../CreativeWorkSeason';
import { CountryMixin } from '../Country';
import { EpisodeMixin } from '../Episode';
import { MusicGroupMixin } from '../MusicGroup';
import { OrganizationMixin } from '../Organization';
import { VideoObjectMixin } from '../VideoObject';

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
