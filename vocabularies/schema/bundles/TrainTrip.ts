import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TripMixin } from '../Trip';
import { TrainTripMixin } from '../TrainTrip';
import { TrainStationMixin } from '../TrainStation';

export const TrainTripBundle = [
  TripMixin as Mixin,
  TrainTripMixin as Mixin,
  TrainStationMixin as Mixin];
