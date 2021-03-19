import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectMixin } from '../lib/Object';
import { EventMixin } from '../lib/Event';

export const EventBundle = [
  ObjectMixin as Mixin,
  EventMixin as Mixin];
