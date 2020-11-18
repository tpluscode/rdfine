import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../lib/Reservation';
import { BoatReservationMixin } from '../lib/BoatReservation';

export const BoatReservationBundle = [
  ReservationMixin as Mixin,
  BoatReservationMixin as Mixin];
