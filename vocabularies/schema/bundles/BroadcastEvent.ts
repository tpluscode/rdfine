import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PublicationEventMixin } from '../PublicationEvent';
import { BroadcastEventMixin } from '../BroadcastEvent';
import { EventMixin } from '../Event';

export const BroadcastEventBundle = [
  PublicationEventMixin as Mixin,
  BroadcastEventMixin as Mixin,
  EventMixin as Mixin];
