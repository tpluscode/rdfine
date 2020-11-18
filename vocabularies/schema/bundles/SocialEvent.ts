import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { SocialEventMixin } from '../lib/SocialEvent';

export const SocialEventBundle = [
  EventMixin as Mixin,
  SocialEventMixin as Mixin];
