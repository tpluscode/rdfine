import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TripMixin } from '../lib/Trip';
import { FlightMixin } from '../lib/Flight';
import { VehicleMixin } from '../lib/Vehicle';
import { AirportMixin } from '../lib/Airport';
import { OrganizationMixin } from '../lib/Organization';
import { DurationMixin } from '../lib/Duration';
import { DistanceMixin } from '../lib/Distance';
import { PersonMixin } from '../lib/Person';

export const FlightBundle = [
  TripMixin as Mixin,
  FlightMixin as Mixin,
  VehicleMixin as Mixin,
  AirportMixin as Mixin,
  OrganizationMixin as Mixin,
  DurationMixin as Mixin,
  DistanceMixin as Mixin,
  PersonMixin as Mixin];
