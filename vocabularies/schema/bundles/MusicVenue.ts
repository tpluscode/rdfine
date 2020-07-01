import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { MusicVenueMixin } from '../MusicVenue';

export const MusicVenueBundle = [
  CivicStructureMixin as Mixin,
  MusicVenueMixin as Mixin];
