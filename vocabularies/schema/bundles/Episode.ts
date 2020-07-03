import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { EpisodeMixin } from '../Episode';
import { PersonMixin } from '../Person';
import { MusicGroupMixin } from '../MusicGroup';
import { CreativeWorkSeasonMixin } from '../CreativeWorkSeason';
import { CreativeWorkSeriesMixin } from '../CreativeWorkSeries';
import { OrganizationMixin } from '../Organization';
import { VideoObjectMixin } from '../VideoObject';

export const EpisodeBundle = [
  CreativeWorkMixin as Mixin,
  EpisodeMixin as Mixin,
  PersonMixin as Mixin,
  MusicGroupMixin as Mixin,
  CreativeWorkSeasonMixin as Mixin,
  CreativeWorkSeriesMixin as Mixin,
  OrganizationMixin as Mixin,
  VideoObjectMixin as Mixin];
