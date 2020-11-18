import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { ScreeningEventMixin } from '../lib/ScreeningEvent';
import { LanguageMixin } from '../lib/Language';
import { MovieMixin } from '../lib/Movie';

export const ScreeningEventBundle = [
  EventMixin as Mixin,
  ScreeningEventMixin as Mixin,
  LanguageMixin as Mixin,
  MovieMixin as Mixin];
