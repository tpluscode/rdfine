import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { EventRelationMixin } from '../lib/EventRelation';
import { EventTypeMixin } from '../lib/EventType';
import { ThingMixin } from '../lib/Thing';

export const EventBundle = [
  EventMixin as Mixin,
  EventRelationMixin as Mixin,
  EventTypeMixin as Mixin,
  ThingMixin as Mixin];
