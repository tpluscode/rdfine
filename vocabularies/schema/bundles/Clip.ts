import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClipMixin } from '../lib/Clip';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { CreativeWorkSeasonMixin } from '../lib/CreativeWorkSeason';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';
import { EpisodeMixin } from '../lib/Episode';
import { HyperTocEntryMixin } from '../lib/HyperTocEntry';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { PersonMixin } from '../lib/Person';

export const ClipBundle = [
  ClipMixin as Mixin,
  CreativeWorkMixin as Mixin,
  CreativeWorkSeasonMixin as Mixin,
  CreativeWorkSeriesMixin as Mixin,
  EpisodeMixin as Mixin,
  HyperTocEntryMixin as Mixin,
  MusicGroupMixin as Mixin,
  PersonMixin as Mixin];
