import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TripMixin } from '../lib/Trip';
import { TouristTripMixin } from '../lib/TouristTrip';
import { AudienceMixin } from '../lib/Audience';

export const TouristTripBundle = [
  TripMixin as Mixin,
  TouristTripMixin as Mixin,
  AudienceMixin as Mixin];
