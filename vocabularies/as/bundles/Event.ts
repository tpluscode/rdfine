import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { ObjectMixin } from '../lib/Object';

export const EventBundle = [
  EventMixin as Mixin,
  ObjectMixin as Mixin];
