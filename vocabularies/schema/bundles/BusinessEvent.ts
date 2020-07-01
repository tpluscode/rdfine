import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { BusinessEventMixin } from '../BusinessEvent';

export const BusinessEventBundle = [
  EventMixin as Mixin,
  BusinessEventMixin as Mixin];
