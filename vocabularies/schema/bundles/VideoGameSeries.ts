import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeriesMixin } from '../CreativeWorkSeries';
import { VideoGameSeriesMixin } from '../VideoGameSeries';
import { PersonMixin } from '../Person';
import { ThingMixin } from '../Thing';
import { CreativeWorkMixin } from '../CreativeWork';
import { CreativeWorkSeasonMixin } from '../CreativeWorkSeason';
import { EpisodeMixin } from '../Episode';
import { PlaceMixin } from '../Place';
import { PostalAddressMixin } from '../PostalAddress';
import { MusicGroupMixin } from '../MusicGroup';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { OrganizationMixin } from '../Organization';
import { VideoObjectMixin } from '../VideoObject';

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
