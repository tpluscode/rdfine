import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { DeliveryEventMixin } from '../lib/DeliveryEvent';

export const DeliveryEventBundle = [
  EventMixin as Mixin,
  DeliveryEventMixin as Mixin];
