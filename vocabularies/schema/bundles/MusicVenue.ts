import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { MusicVenueMixin } from '../lib/MusicVenue';

export const MusicVenueBundle = [
  CivicStructureMixin as Mixin,
  MusicVenueMixin as Mixin];
