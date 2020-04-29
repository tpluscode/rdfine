import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { BusinessEventMixin } from '../BusinessEvent';

export const BusinessEventDependencies = [
  EventMixin as Mixin,
  BusinessEventMixin as Mixin];
