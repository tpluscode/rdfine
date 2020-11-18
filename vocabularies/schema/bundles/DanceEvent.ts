import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { DanceEventMixin } from '../lib/DanceEvent';

export const DanceEventBundle = [
  EventMixin as Mixin,
  DanceEventMixin as Mixin];
