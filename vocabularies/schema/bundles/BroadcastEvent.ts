import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BroadcastEventMixin } from '../lib/BroadcastEvent';
import { EventMixin } from '../lib/Event';
import { LanguageMixin } from '../lib/Language';
import { PublicationEventMixin } from '../lib/PublicationEvent';

export const BroadcastEventBundle = [
  BroadcastEventMixin as Mixin,
  EventMixin as Mixin,
  LanguageMixin as Mixin,
  PublicationEventMixin as Mixin];
