import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { CreativeWorkSeasonMixin } from '../lib/CreativeWorkSeason';
import { CreativeWorkSeriesMixin } from '../lib/CreativeWorkSeries';
import { EpisodeMixin } from '../lib/Episode';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { VideoObjectMixin } from '../lib/VideoObject';

export const CreativeWorkSeasonBundle = [
  CreativeWorkMixin as Mixin,
  CreativeWorkSeasonMixin as Mixin,
  CreativeWorkSeriesMixin as Mixin,
  EpisodeMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  VideoObjectMixin as Mixin];
