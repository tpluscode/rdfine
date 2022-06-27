import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BroadcastServiceMixin } from '../lib/BroadcastService';
import { EventMixin } from '../lib/Event';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { PublicationEventMixin } from '../lib/PublicationEvent';

export const PublicationEventBundle = [
  BroadcastServiceMixin as Mixin,
  EventMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  PublicationEventMixin as Mixin];
