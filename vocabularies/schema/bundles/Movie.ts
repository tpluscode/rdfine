import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MovieMixin } from '../lib/Movie';
import { PersonMixin } from '../lib/Person';
import { CountryMixin } from '../lib/Country';
import { DurationMixin } from '../lib/Duration';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { OrganizationMixin } from '../lib/Organization';
import { LanguageMixin } from '../lib/Language';
import { VideoObjectMixin } from '../lib/VideoObject';

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
