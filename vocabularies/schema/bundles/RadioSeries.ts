import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';
import { RadioSeriesMixin } from '../lib/RadioSeries';
import { PersonMixin } from '../lib/Person';
import { CreativeWorkSeasonMixin } from '../lib/CreativeWorkSeason';
import { EpisodeMixin } from '../lib/Episode';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { OrganizationMixin } from '../lib/Organization';
import { VideoObjectMixin } from '../lib/VideoObject';

export const RadioSeriesBundle = [
  CreativeWorkSeriesMixin as Mixin,
  RadioSeriesMixin as Mixin,
  PersonMixin as Mixin,
  CreativeWorkSeasonMixin as Mixin,
  EpisodeMixin as Mixin,
  MusicGroupMixin as Mixin,
  OrganizationMixin as Mixin,
  VideoObjectMixin as Mixin];
