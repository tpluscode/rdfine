import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { TheaterEventMixin } from '../lib/TheaterEvent';

export const TheaterEventBundle = [
  EventMixin as Mixin,
  TheaterEventMixin as Mixin];
