import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { LanguageMixin } from '../lib/Language';
import { MovieMixin } from '../lib/Movie';
import { ScreeningEventMixin } from '../lib/ScreeningEvent';

export const ScreeningEventBundle = [
  EventMixin as Mixin,
  LanguageMixin as Mixin,
  MovieMixin as Mixin,
  ScreeningEventMixin as Mixin];
