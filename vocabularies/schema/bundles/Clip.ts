import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ClipMixin } from '../lib/Clip';
import { PersonMixin } from '../lib/Person';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { EpisodeMixin } from '../lib/Episode';
import { CreativeWorkSeasonMixin } from '../lib/CreativeWorkSeason';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';

export const ClipBundle = [
  CreativeWorkMixin as Mixin,
  ClipMixin as Mixin,
  PersonMixin as Mixin,
  MusicGroupMixin as Mixin,
  EpisodeMixin as Mixin,
  CreativeWorkSeasonMixin as Mixin,
  CreativeWorkSeriesMixin as Mixin];
