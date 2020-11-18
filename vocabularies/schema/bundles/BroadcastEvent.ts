import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PublicationEventMixin } from '../lib/PublicationEvent';
import { BroadcastEventMixin } from '../lib/BroadcastEvent';
import { EventMixin } from '../lib/Event';
import { LanguageMixin } from '../lib/Language';

export const BroadcastEventBundle = [
  PublicationEventMixin as Mixin,
  BroadcastEventMixin as Mixin,
  EventMixin as Mixin,
  LanguageMixin as Mixin];
