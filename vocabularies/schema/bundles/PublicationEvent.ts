import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { PublicationEventMixin } from '../PublicationEvent';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { BroadcastServiceMixin } from '../BroadcastService';

export const PublicationEventBundle = [
  EventMixin as Mixin,
  PublicationEventMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  BroadcastServiceMixin as Mixin];
