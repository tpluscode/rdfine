import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';
import { VideoGameSeriesMixin } from '../lib/VideoGameSeries';
import { PersonMixin } from '../lib/Person';
import { ThingMixin } from '../lib/Thing';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { CreativeWorkSeasonMixin } from '../lib/CreativeWorkSeason';
import { EpisodeMixin } from '../lib/Episode';
import { PlaceMixin } from '../lib/Place';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { OrganizationMixin } from '../lib/Organization';
import { VideoObjectMixin } from '../lib/VideoObject';

export const VideoGameSeriesBundle = [
  CreativeWorkSeriesMixin as Mixin,
  VideoGameSeriesMixin as Mixin,
  PersonMixin as Mixin,
  ThingMixin as Mixin,
  CreativeWorkMixin as Mixin,
  CreativeWorkSeasonMixin as Mixin,
  EpisodeMixin as Mixin,
  PlaceMixin as Mixin,
  PostalAddressMixin as Mixin,
  MusicGroupMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  OrganizationMixin as Mixin,
  VideoObjectMixin as Mixin];
