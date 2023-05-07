import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event.js';
import { EventRelationMixin } from '../lib/EventRelation.js';
import { EventTypeMixin } from '../lib/EventType.js';
import { ThingMixin } from '../lib/Thing.js';

export const EventBundle = [
  EventMixin as Mixin,
  EventRelationMixin as Mixin,
  EventTypeMixin as Mixin,
  ThingMixin as Mixin];
