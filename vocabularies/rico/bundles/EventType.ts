import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { EventTypeMixin } from '../lib/EventType';
import { TypeMixin } from '../lib/Type';

export const EventTypeBundle = [
  EventMixin as Mixin,
  EventTypeMixin as Mixin,
  TypeMixin as Mixin];
