import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { ClipMixin } from '../Clip';
import { PersonMixin } from '../Person';
import { MusicGroupMixin } from '../MusicGroup';
import { EpisodeMixin } from '../Episode';
import { CreativeWorkSeasonMixin } from '../CreativeWorkSeason';
import { CreativeWorkSeriesMixin } from '../CreativeWorkSeries';

export const ClipBundle = [
  CreativeWorkMixin as Mixin,
  ClipMixin as Mixin,
  PersonMixin as Mixin,
  MusicGroupMixin as Mixin,
  EpisodeMixin as Mixin,
  CreativeWorkSeasonMixin as Mixin,
  CreativeWorkSeriesMixin as Mixin];
