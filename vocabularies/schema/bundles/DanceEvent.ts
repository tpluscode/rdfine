import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { DanceEventMixin } from '../DanceEvent';

export const DanceEventBundle = [
  EventMixin as Mixin,
  DanceEventMixin as Mixin];
