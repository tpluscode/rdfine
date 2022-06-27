import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { TouristTripMixin } from '../lib/TouristTrip';
import { TripMixin } from '../lib/Trip';

export const TouristTripBundle = [
  AudienceMixin as Mixin,
  TouristTripMixin as Mixin,
  TripMixin as Mixin];
