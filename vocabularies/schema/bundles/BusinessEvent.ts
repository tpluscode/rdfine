import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BusinessEventMixin } from '../lib/BusinessEvent';
import { EventMixin } from '../lib/Event';

export const BusinessEventBundle = [
  BusinessEventMixin as Mixin,
  EventMixin as Mixin];
