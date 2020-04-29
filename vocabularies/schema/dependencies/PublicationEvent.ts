import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { PublicationEventMixin } from '../PublicationEvent';
import { BroadcastServiceMixin } from '../BroadcastService';

export const PublicationEventDependencies = [
  EventMixin as Mixin,
  PublicationEventMixin as Mixin,
  BroadcastServiceMixin as Mixin];
