import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TripMixin } from '../lib/Trip';
import { BusTripMixin } from '../lib/BusTrip';
import { BusStationMixin } from '../lib/BusStation';
import { BusStopMixin } from '../lib/BusStop';

export const BusTripBundle = [
  TripMixin as Mixin,
  BusTripMixin as Mixin,
  BusStationMixin as Mixin,
  BusStopMixin as Mixin];
