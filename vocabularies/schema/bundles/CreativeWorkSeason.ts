import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { CreativeWorkSeasonMixin } from '../CreativeWorkSeason';
import { PersonMixin } from '../Person';
import { EpisodeMixin } from '../Episode';
import { CreativeWorkSeriesMixin } from '../CreativeWorkSeries';
import { OrganizationMixin } from '../Organization';
import { VideoObjectMixin } from '../VideoObject';

export const CreativeWorkSeasonBundle = [
  CreativeWorkMixin as Mixin,
  CreativeWorkSeasonMixin as Mixin,
  PersonMixin as Mixin,
  EpisodeMixin as Mixin,
  CreativeWorkSeriesMixin as Mixin,
  OrganizationMixin as Mixin,
  VideoObjectMixin as Mixin];
