import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeasonMixin } from '../lib/CreativeWorkSeason';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';
import { EpisodeMixin } from '../lib/Episode';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { RadioSeriesMixin } from '../lib/RadioSeries';
import { VideoObjectMixin } from '../lib/VideoObject';

export const RadioSeriesBundle = [
  CreativeWorkSeasonMixin as Mixin,
  CreativeWorkSeriesMixin as Mixin,
  EpisodeMixin as Mixin,
  MusicGroupMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  RadioSeriesMixin as Mixin,
  VideoObjectMixin as Mixin];
