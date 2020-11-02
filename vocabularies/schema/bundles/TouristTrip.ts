import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TripMixin } from '../Trip';
import { TouristTripMixin } from '../TouristTrip';
import { AudienceMixin } from '../Audience';

export const TouristTripBundle = [
  TripMixin as Mixin,
  TouristTripMixin as Mixin,
  AudienceMixin as Mixin];
