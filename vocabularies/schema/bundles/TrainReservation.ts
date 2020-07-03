import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../Reservation';
import { TrainReservationMixin } from '../TrainReservation';

export const TrainReservationBundle = [
  ReservationMixin as Mixin,
  TrainReservationMixin as Mixin];
