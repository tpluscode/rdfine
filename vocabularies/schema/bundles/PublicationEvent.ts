import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { PublicationEventMixin } from '../lib/PublicationEvent';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { BroadcastServiceMixin } from '../lib/BroadcastService';

export const PublicationEventBundle = [
  EventMixin as Mixin,
  PublicationEventMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  BroadcastServiceMixin as Mixin];
