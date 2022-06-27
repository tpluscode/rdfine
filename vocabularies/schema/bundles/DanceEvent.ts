import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DanceEventMixin } from '../lib/DanceEvent';
import { EventMixin } from '../lib/Event';

export const DanceEventBundle = [
  DanceEventMixin as Mixin,
  EventMixin as Mixin];
