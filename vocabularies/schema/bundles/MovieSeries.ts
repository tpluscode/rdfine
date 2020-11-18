import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';
import { MovieSeriesMixin } from '../lib/MovieSeries';
import { PersonMixin } from '../lib/Person';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { OrganizationMixin } from '../lib/Organization';
import { VideoObjectMixin } from '../lib/VideoObject';

export const MovieSeriesBundle = [
  CreativeWorkSeriesMixin as Mixin,
  MovieSeriesMixin as Mixin,
  PersonMixin as Mixin,
  MusicGroupMixin as Mixin,
  OrganizationMixin as Mixin,
  VideoObjectMixin as Mixin];
