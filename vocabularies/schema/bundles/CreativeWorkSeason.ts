import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { CreativeWorkSeasonMixin } from '../lib/CreativeWorkSeason';
import { PersonMixin } from '../lib/Person';
import { EpisodeMixin } from '../lib/Episode';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';
import { OrganizationMixin } from '../lib/Organization';
import { VideoObjectMixin } from '../lib/VideoObject';

export const CreativeWorkSeasonBundle = [
  CreativeWorkMixin as Mixin,
  CreativeWorkSeasonMixin as Mixin,
  PersonMixin as Mixin,
  EpisodeMixin as Mixin,
  CreativeWorkSeriesMixin as Mixin,
  OrganizationMixin as Mixin,
  VideoObjectMixin as Mixin];
