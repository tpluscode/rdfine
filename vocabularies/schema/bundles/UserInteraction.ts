import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { UserInteractionMixin } from '../lib/UserInteraction';

export const UserInteractionBundle = [
  EventMixin as Mixin,
  UserInteractionMixin as Mixin];
