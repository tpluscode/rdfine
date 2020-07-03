import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeriesMixin } from '../CreativeWorkSeries';
import { MovieSeriesMixin } from '../MovieSeries';
import { PersonMixin } from '../Person';
import { MusicGroupMixin } from '../MusicGroup';
import { OrganizationMixin } from '../Organization';
import { VideoObjectMixin } from '../VideoObject';

export const MovieSeriesBundle = [
  CreativeWorkSeriesMixin as Mixin,
  MovieSeriesMixin as Mixin,
  PersonMixin as Mixin,
  MusicGroupMixin as Mixin,
  OrganizationMixin as Mixin,
  VideoObjectMixin as Mixin];
