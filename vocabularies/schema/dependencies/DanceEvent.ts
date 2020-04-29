import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { DanceEventMixin } from '../DanceEvent';

export const DanceEventDependencies = [
  EventMixin as Mixin,
  DanceEventMixin as Mixin];
