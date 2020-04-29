import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { EventVenueMixin } from '../EventVenue';

export const EventVenueDependencies = [
  CivicStructureMixin as Mixin,
  EventVenueMixin as Mixin];
