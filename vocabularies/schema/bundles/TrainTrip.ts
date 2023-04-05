import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TrainStationMixin } from '../lib/TrainStation';
import { TrainTripMixin } from '../lib/TrainTrip';
import { TripMixin } from '../lib/Trip';

export const TrainTripBundle = [
  TrainStationMixin as Mixin,
  TrainTripMixin as Mixin,
  TripMixin as Mixin];
