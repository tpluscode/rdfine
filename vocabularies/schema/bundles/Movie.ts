import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CountryMixin } from '../lib/Country';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DurationMixin } from '../lib/Duration';
import { LanguageMixin } from '../lib/Language';
import { MovieMixin } from '../lib/Movie';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { VideoObjectMixin } from '../lib/VideoObject';

export const MovieBundle = [
  CountryMixin as Mixin,
  CreativeWorkMixin as Mixin,
  DurationMixin as Mixin,
  LanguageMixin as Mixin,
  MovieMixin as Mixin,
  MusicGroupMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  VideoObjectMixin as Mixin];
