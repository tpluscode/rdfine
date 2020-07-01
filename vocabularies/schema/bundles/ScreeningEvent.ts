import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { ScreeningEventMixin } from '../ScreeningEvent';
import { MovieMixin } from '../Movie';

export const ScreeningEventBundle = [
  EventMixin as Mixin,
  ScreeningEventMixin as Mixin,
  MovieMixin as Mixin];
