import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../lib/Reservation';
import { TrainReservationMixin } from '../lib/TrainReservation';

export const TrainReservationBundle = [
  ReservationMixin as Mixin,
  TrainReservationMixin as Mixin];
