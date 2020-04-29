import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { ComedyEventMixin } from '../ComedyEvent';

export const ComedyEventDependencies = [
  EventMixin as Mixin,
  ComedyEventMixin as Mixin];
