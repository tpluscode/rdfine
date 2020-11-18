import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { BusinessEventMixin } from '../lib/BusinessEvent';

export const BusinessEventBundle = [
  EventMixin as Mixin,
  BusinessEventMixin as Mixin];
