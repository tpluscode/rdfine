import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { EventVenueMixin } from '../lib/EventVenue';

export const EventVenueBundle = [
  CivicStructureMixin as Mixin,
  EventVenueMixin as Mixin];
