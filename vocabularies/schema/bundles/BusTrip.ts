import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BusStationMixin } from '../lib/BusStation';
import { BusStopMixin } from '../lib/BusStop';
import { BusTripMixin } from '../lib/BusTrip';
import { TripMixin } from '../lib/Trip';

export const BusTripBundle = [
  BusStationMixin as Mixin,
  BusStopMixin as Mixin,
  BusTripMixin as Mixin,
  TripMixin as Mixin];
