import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { ScreeningEventMixin } from '../ScreeningEvent';
import { LanguageMixin } from '../Language';
import { MovieMixin } from '../Movie';

export const ScreeningEventBundle = [
  EventMixin as Mixin,
  ScreeningEventMixin as Mixin,
  LanguageMixin as Mixin,
  MovieMixin as Mixin];
