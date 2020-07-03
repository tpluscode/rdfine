import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TripMixin } from '../Trip';
import { FlightMixin } from '../Flight';
import { VehicleMixin } from '../Vehicle';
import { AirportMixin } from '../Airport';
import { OrganizationMixin } from '../Organization';
import { DurationMixin } from '../Duration';
import { DistanceMixin } from '../Distance';
import { PersonMixin } from '../Person';

export const FlightBundle = [
  TripMixin as Mixin,
  FlightMixin as Mixin,
  VehicleMixin as Mixin,
  AirportMixin as Mixin,
  OrganizationMixin as Mixin,
  DurationMixin as Mixin,
  DistanceMixin as Mixin,
  PersonMixin as Mixin];
