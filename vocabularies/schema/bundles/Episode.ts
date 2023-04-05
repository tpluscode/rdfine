import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { CreativeWorkSeasonMixin } from '../lib/CreativeWorkSeason';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';
import { DurationMixin } from '../lib/Duration';
import { EpisodeMixin } from '../lib/Episode';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { VideoObjectMixin } from '../lib/VideoObject';

export const EpisodeBundle = [
  CreativeWorkMixin as Mixin,
  CreativeWorkSeasonMixin as Mixin,
  CreativeWorkSeriesMixin as Mixin,
  DurationMixin as Mixin,
  EpisodeMixin as Mixin,
  MusicGroupMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  VideoObjectMixin as Mixin];
