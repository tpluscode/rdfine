import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AirportMixin } from '../lib/Airport';
import { DistanceMixin } from '../lib/Distance';
import { DurationMixin } from '../lib/Duration';
import { FlightMixin } from '../lib/Flight';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { TripMixin } from '../lib/Trip';
import { VehicleMixin } from '../lib/Vehicle';

export const FlightBundle = [
  AirportMixin as Mixin,
  DistanceMixin as Mixin,
  DurationMixin as Mixin,
  FlightMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  TripMixin as Mixin,
  VehicleMixin as Mixin];
