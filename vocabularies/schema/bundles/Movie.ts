import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { MovieMixin } from '../Movie';
import { PersonMixin } from '../Person';
import { CountryMixin } from '../Country';
import { DurationMixin } from '../Duration';
import { MusicGroupMixin } from '../MusicGroup';
import { OrganizationMixin } from '../Organization';
import { LanguageMixin } from '../Language';
import { VideoObjectMixin } from '../VideoObject';

export const MovieBundle = [
  CreativeWorkMixin as Mixin,
  MovieMixin as Mixin,
  PersonMixin as Mixin,
  CountryMixin as Mixin,
  DurationMixin as Mixin,
  MusicGroupMixin as Mixin,
  OrganizationMixin as Mixin,
  LanguageMixin as Mixin,
  VideoObjectMixin as Mixin];
