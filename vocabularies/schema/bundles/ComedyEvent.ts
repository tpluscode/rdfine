import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { ComedyEventMixin } from '../lib/ComedyEvent';

export const ComedyEventBundle = [
  EventMixin as Mixin,
  ComedyEventMixin as Mixin];
