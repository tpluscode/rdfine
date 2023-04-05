import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BoatReservationMixin } from '../lib/BoatReservation';
import { ReservationMixin } from '../lib/Reservation';

export const BoatReservationBundle = [
  BoatReservationMixin as Mixin,
  ReservationMixin as Mixin];
