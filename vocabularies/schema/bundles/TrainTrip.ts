import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TripMixin } from '../lib/Trip';
import { TrainTripMixin } from '../lib/TrainTrip';
import { TrainStationMixin } from '../lib/TrainStation';

export const TrainTripBundle = [
  TripMixin as Mixin,
  TrainTripMixin as Mixin,
  TrainStationMixin as Mixin];
