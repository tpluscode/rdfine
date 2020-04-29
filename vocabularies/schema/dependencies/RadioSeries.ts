import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeriesMixin } from '../CreativeWorkSeries';
import { RadioSeriesMixin } from '../RadioSeries';
import { PersonMixin } from '../Person';
import { CreativeWorkSeasonMixin } from '../CreativeWorkSeason';
import { EpisodeMixin } from '../Episode';
import { MusicGroupMixin } from '../MusicGroup';
import { OrganizationMixin } from '../Organization';
import { VideoObjectMixin } from '../VideoObject';

export const RadioSeriesDependencies = [
  CreativeWorkSeriesMixin as Mixin,
  RadioSeriesMixin as Mixin,
  PersonMixin as Mixin,
  CreativeWorkSeasonMixin as Mixin,
  EpisodeMixin as Mixin,
  MusicGroupMixin as Mixin,
  OrganizationMixin as Mixin,
  VideoObjectMixin as Mixin];
