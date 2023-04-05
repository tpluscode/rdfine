import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ComedyEventMixin } from '../lib/ComedyEvent';
import { EventMixin } from '../lib/Event';

export const ComedyEventBundle = [
  ComedyEventMixin as Mixin,
  EventMixin as Mixin];
