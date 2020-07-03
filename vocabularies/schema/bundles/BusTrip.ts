import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TripMixin } from '../Trip';
import { BusTripMixin } from '../BusTrip';
import { BusStationMixin } from '../BusStation';
import { BusStopMixin } from '../BusStop';

export const BusTripBundle = [
  TripMixin as Mixin,
  BusTripMixin as Mixin,
  BusStationMixin as Mixin,
  BusStopMixin as Mixin];
