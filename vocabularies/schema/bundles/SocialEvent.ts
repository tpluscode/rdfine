import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { SocialEventMixin } from '../SocialEvent';

export const SocialEventBundle = [
  EventMixin as Mixin,
  SocialEventMixin as Mixin];
