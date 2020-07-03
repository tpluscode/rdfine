import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { DeliveryEventMixin } from '../DeliveryEvent';

export const DeliveryEventBundle = [
  EventMixin as Mixin,
  DeliveryEventMixin as Mixin];
