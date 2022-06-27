import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DeliveryEventMixin } from '../lib/DeliveryEvent';
import { EventMixin } from '../lib/Event';

export const DeliveryEventBundle = [
  DeliveryEventMixin as Mixin,
  EventMixin as Mixin];
