import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { TheaterEventMixin } from '../TheaterEvent';

export const TheaterEventDependencies = [
  EventMixin as Mixin,
  TheaterEventMixin as Mixin];
