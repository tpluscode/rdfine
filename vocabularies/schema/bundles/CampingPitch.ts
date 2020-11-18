import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccommodationMixin } from '../lib/Accommodation';
import { CampingPitchMixin } from '../lib/CampingPitch';

export const CampingPitchBundle = [
  AccommodationMixin as Mixin,
  CampingPitchMixin as Mixin];
