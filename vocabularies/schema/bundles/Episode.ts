import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { EpisodeMixin } from '../lib/Episode';
import { PersonMixin } from '../lib/Person';
import { DurationMixin } from '../lib/Duration';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { CreativeWorkSeasonMixin } from '../lib/CreativeWorkSeason';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';
import { OrganizationMixin } from '../lib/Organization';
import { VideoObjectMixin } from '../lib/VideoObject';

export const EpisodeBundle = [
  CreativeWorkMixin as Mixin,
  EpisodeMixin as Mixin,
  PersonMixin as Mixin,
  DurationMixin as Mixin,
  MusicGroupMixin as Mixin,
  CreativeWorkSeasonMixin as Mixin,
  CreativeWorkSeriesMixin as Mixin,
  OrganizationMixin as Mixin,
  VideoObjectMixin as Mixin];
